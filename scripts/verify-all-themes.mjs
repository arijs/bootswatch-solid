#!/usr/bin/env node
// Resumable driver for the VE (ve-project2) verification pass across all themes.
//
// Runs `capture-leaf-screenshots.mjs --theme=<t> --verify-ve-rendering
// --skip-to-route=<anchor>` one theme at a time. The child flushes incremental
// progress to VERIFY_JSON_OUT after every scenario and, on SIGINT/SIGTERM,
// finishes the in-flight scenario, flushes, and stops.
//
// Resume is at ROUTE (component) granularity: on interrupt the child records the
// last completed route; re-running resumes that theme from that route forward
// (`--skip-to-route=<lastRoute>`), so at most one route is re-verified.
//
// State files (under verify-run/, git-ignored):
//   progress.json    — per-theme { complete, lastRoute, stats }, current theme
//   mismatches.json  — mismatches grouped by theme (accumulated across resumes)
//   logs/<theme>.log — full child output per theme (appended across resumes)
//
// Usage:
//   node scripts/verify-all-themes.mjs                 # all themes except bootstrap
//   node scripts/verify-all-themes.mjs --width=720
//   node scripts/verify-all-themes.mjs --themes=darkly,quartz
//   node scripts/verify-all-themes.mjs --reset         # start over
//   node scripts/verify-all-themes.mjs --include-bootstrap

import { spawn } from 'node:child_process'
import { createWriteStream } from 'node:fs'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import { slugifyTheme } from './capture-leaf-screenshots/utils.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '..')
const CAPTURE = path.join(HERE, 'capture-leaf-screenshots.mjs')
const RUN_DIR = path.join(ROOT, 'verify-run')
const PROGRESS = path.join(RUN_DIR, 'progress.json')
const MISMATCHES = path.join(RUN_DIR, 'mismatches.json')
const LOG_DIR = path.join(RUN_DIR, 'logs')
const FROM_SCRATCH = '/**' // glob → child anchors on the first sorted leaf route

const argv = process.argv.slice(2)
const flag = (p) => argv.find((a) => a.startsWith(p))?.slice(p.length)
const width = flag('--width=')
const explicitThemes = flag('--themes=')
const reset = argv.includes('--reset')
const includeBootstrap = argv.includes('--include-bootstrap')

async function readJson(file, fallback) {
	try {
		return JSON.parse(await readFile(file, 'utf8'))
	} catch {
		return fallback
	}
}

// Theme list comes from the same source the capture script parses.
async function discoverThemes() {
	const src = await readFile(path.join(ROOT, 'src', 'logic', 'themes.ts'), 'utf8')
	return [...src.matchAll(/name:\s*`([^`]+)`/g)].map((m) => ({
		name: m[1],
		slug: slugifyTheme(m[1]),
	}))
}

function runTheme(theme, anchor, jsonOut, logPath) {
	return new Promise((resolve, reject) => {
		const args = [
			CAPTURE,
			`--theme=${theme.name}`,
			'--verify-ve-rendering',
			`--skip-to-route=${anchor}`,
		]
		if (width) args.push(`--width=${width}`)
		const log = createWriteStream(logPath, { flags: 'a' })
		log.write(`\n\n===== run ${new Date().toISOString()} anchor=${anchor} =====\n`)
		const child = spawn(process.execPath, args, {
			cwd: ROOT,
			env: { ...process.env, VERIFY_JSON_OUT: jsonOut },
		})
		const tee = (chunk) => {
			process.stdout.write(chunk)
			log.write(chunk)
		}
		child.stdout.on('data', tee)
		child.stderr.on('data', tee)
		child.on('error', reject)
		child.on('close', (code) => {
			log.end()
			resolve(code)
		})
	})
}

async function main() {
	if (reset) await rm(RUN_DIR, { recursive: true, force: true })
	await mkdir(LOG_DIR, { recursive: true })

	const all = await discoverThemes()
	const themes = explicitThemes
		? explicitThemes.split(',').map((s) => {
				const t = all.find((x) => x.slug === slugifyTheme(s))
				if (!t) throw new Error(`Unknown theme: ${s}`)
				return t
			})
		: all.filter((t) => includeBootstrap || t.slug !== 'bootstrap')

	const progress = await readJson(PROGRESS, {
		startedAt: new Date().toISOString(),
		width: width ?? null,
		themes: {},
		current: null,
	})
	const mismatches = await readJson(MISMATCHES, {})

	let interrupted = false
	const save = async () => {
		progress.updatedAt = new Date().toISOString()
		await writeFile(PROGRESS, `${JSON.stringify(progress, null, 2)}\n`)
		await writeFile(MISMATCHES, `${JSON.stringify(mismatches, null, 2)}\n`)
	}
	process.on('SIGINT', () => {
		interrupted = true
		console.log('\nSIGINT — child will flush; recording partial progress, then stopping.')
	})
	process.on('SIGTERM', () => {
		interrupted = true
	})

	const pending = themes.filter((t) => !progress.themes[t.slug]?.complete)
	console.log(
		`verify-all-themes: ${pending.length} pending, ${themes.length - pending.length} complete, ${themes.length} total`,
	)
	if (pending.length === 0) {
		console.log('Nothing to do. Use --reset to start over.')
		return
	}

	for (const theme of pending) {
		if (interrupted) break
		const state = progress.themes[theme.slug]
		// Resume from the last completed route (redo it fully); else start fresh.
		const anchor = state?.lastRoute ?? FROM_SCRATCH
		progress.current = theme.slug
		await save()
		console.log(`\n=== ${theme.name} (${theme.slug}) — anchor=${anchor} ===`)

		const jsonOut = path.join(RUN_DIR, `tmp-${theme.slug}.json`)
		const logPath = path.join(LOG_DIR, `${theme.slug}.log`)
		const code = await runTheme(theme, anchor, jsonOut, logPath)
		const result = await readJson(jsonOut, null)
		await rm(jsonOut, { force: true })

		if (!result) {
			// No JSON at all: the child died before verifying anything (build/server
			// error). Leave the theme as-is and stop — it would fail every theme.
			console.error(
				`\n${theme.name}: FAILED (exit ${code}, no progress json). See ${path.relative(ROOT, logPath)}. Stopping.`,
			)
			progress.current = null
			await save()
			process.exitCode = 1
			return
		}

		// Merge mismatches: keep prior entries for routes BEFORE this run's anchor
		// (they were verified in an earlier resume and not revisited); replace the
		// rest with this run's fresh results.
		const prior = mismatches[theme.slug] ?? []
		const kept = anchor === FROM_SCRATCH ? [] : prior.filter((m) => m.route < anchor)
		mismatches[theme.slug] = [...kept, ...result.mismatches]

		progress.themes[theme.slug] = {
			name: theme.name,
			complete: result.complete === true,
			lastRoute: result.lastRoute ?? state?.lastRoute ?? null,
			stats: {
				ran: result.ran,
				matched: result.matched,
				mismatched: result.mismatched,
				skipped: result.skipped,
			},
			updatedAt: new Date().toISOString(),
		}
		progress.current = null
		await save()

		if (result.complete) {
			console.log(
				`${theme.name}: COMPLETE — matched=${result.matched} mismatched=${result.mismatched} skipped=${result.skipped}`,
			)
		} else {
			console.log(
				`${theme.name}: INTERRUPTED at ${result.lastRoute} — resume later from there. (${mismatches[theme.slug].length} mismatches so far)`,
			)
			// Child stopped early (SIGINT) or errored mid-theme. Stop the batch.
			process.exitCode = code === 0 ? 0 : 1
			return
		}
	}

	await save()
	const complete = themes.filter((t) => progress.themes[t.slug]?.complete).length
	const totalMismatch = Object.values(mismatches).reduce((n, arr) => n + arr.length, 0)
	console.log(
		`\nDone this session. ${complete}/${themes.length} themes complete, ${totalMismatch} total mismatches recorded.`,
	)
	console.log(`Progress:   ${path.relative(ROOT, PROGRESS)}`)
	console.log(`Mismatches: ${path.relative(ROOT, MISMATCHES)}`)
}

main().catch((err) => {
	console.error(err)
	process.exitCode = 1
})
