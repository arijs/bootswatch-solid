#!/usr/bin/env node
/**
 * Generate VE theme sources for all screenshot themes, then verify one theme at a time.
 * Writes per-theme logs and a summary report.
 *
 * Usage:
 *   node scripts/generate-ve-theme/batch-generate-and-verify.mjs
 *   node scripts/generate-ve-theme/batch-generate-and-verify.mjs --generate-only
 *   node scripts/generate-ve-theme/batch-generate-and-verify.mjs --verify-only --run-dir=docs/ve-theme-generator-validation/2026-05-23-120000
 */

import { spawn } from 'node:child_process'
import { mkdir, readdir, writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { ROOT } from './constants.mjs'
import {
	listGeneratedThemeSlugs,
	patchAllIndexHtmlFonts,
	patchAllVe2ShellThemes,
} from './scaffold-emitter.mjs'

/** Quick per-theme checks — diverse families, static state only. */
const SMOKE_ROUTES = [
	'/ui/buttons/solid/primary-button',
	'/forms/overview/basic-form',
	'/contents/typography/heading',
].join(',')

function parseArgs(argv) {
	const opts = {
		generateOnly: false,
		verifyOnly: false,
		familiesOnly: false,
		skipSmoke: false,
		runDir: null,
		force: true,
	}
	for (const arg of argv) {
		if (arg === '--generate-only') opts.generateOnly = true
		else if (arg === '--verify-only') opts.verifyOnly = true
		else if (arg === '--families-only') opts.familiesOnly = true
		else if (arg === '--skip-smoke') opts.skipSmoke = true
		else if (arg.startsWith('--run-dir=')) opts.runDir = arg.slice('--run-dir='.length)
		else if (arg === '--no-force') opts.force = false
	}
	return opts
}

function timestampDir() {
	const d = new Date()
	const pad = (n) => String(n).padStart(2, '0')
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

async function listScreenshotThemes() {
	const dir = path.join(ROOT, 'screenshots')
	const entries = await readdir(dir, { withFileTypes: true })
	return entries
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort()
}

function runCommand(command, args, logPath) {
	return new Promise((resolve, reject) => {
		const chunks = []
		const child = spawn(command, args, { shell: true, cwd: ROOT })
		child.stdout.on('data', (d) => {
			const s = d.toString()
			chunks.push(s)
			process.stdout.write(s)
		})
		child.stderr.on('data', (d) => {
			const s = d.toString()
			chunks.push(s)
			process.stderr.write(s)
		})
		child.on('close', async (code) => {
			const output = chunks.join('')
			if (logPath) await writeFile(logPath, output, 'utf8')
			resolve({ code: code ?? 1, output })
		})
		child.on('error', reject)
	})
}

function parseVerificationSummary(output) {
	const summary = {
		passed: null,
		failed: null,
		total: null,
		skipped: null,
		mismatched: null,
		ran: null,
		raw: output,
	}
	const veMatch = output.match(
		/VE verification: ran=(\d+), matched=(\d+), mismatched=(\d+), skipped=(\d+)/,
	)
	if (veMatch) {
		summary.ran = Number(veMatch[1])
		summary.passed = Number(veMatch[2])
		summary.mismatched = Number(veMatch[3])
		summary.failed = Number(veMatch[3])
		summary.skipped = Number(veMatch[4])
		summary.total = summary.ran
		return summary
	}
	const passedMatch = output.match(/passed=(\d+)/i) ?? output.match(/(\d+)\s+passed/i)
	const failedMatch = output.match(/failed=(\d+)/i) ?? output.match(/(\d+)\s+failed/i)
	const totalMatch = output.match(/scenarios[=:\s]+(\d+)/i) ?? output.match(/total[=:\s]+(\d+)/i)
	if (passedMatch) summary.passed = Number(passedMatch[1])
	if (failedMatch) summary.failed = Number(failedMatch[1])
	if (totalMatch) summary.total = Number(totalMatch[1])
	if (summary.passed != null && summary.failed != null && summary.total == null) {
		summary.total = summary.passed + summary.failed
	}
	return summary
}

/** Hard failures that invalidate verification for a theme (run smoke first). */
function parseVerificationBlockers(output) {
	const blockers = []
	const scopeErrors = (output.match(/Unable to resolve VE2 scope class/g) ?? []).length
	if (scopeErrors > 0) {
		blockers.push(`VE2 scope class not resolved (${scopeErrors}×)`)
	}
	if (/Build failed with/i.test(output)) {
		blockers.push('ve2:build failed during verification')
	}
	const captureFailed = output.match(/Summary: saved=\d+, skipped=\d+, failed=(\d+)/)
	if (captureFailed && Number(captureFailed[1]) > 0) {
		blockers.push(`${captureFailed[1]} capture(s) failed`)
	}
	if (/ReferenceError:|SyntaxError:|TypeError:/i.test(output)) {
		blockers.push('runtime error in page or build')
	}
	return blockers
}

async function runThemeVerification(theme, logPath, { smoke = false } = {}) {
	const args = [
		'scripts/capture-leaf-screenshots.mjs',
		`--theme=${theme}`,
		'--verify-ve-rendering',
	]
	if (smoke) {
		args.push(`--route=${SMOKE_ROUTES}`, '--state=static')
	}
	return runCommand('node', args, logPath)
}

function parseGenerationSummary(output) {
	return {
		ok: !/Error:|exit code [1-9]/i.test(output),
		writtenFamilies: (output.match(/written/g) ?? []).length,
		skippedFamilies: (output.match(/skipped/g) ?? []).length,
	}
}

async function main() {
	const opts = parseArgs(process.argv.slice(2))
	const themes = await listScreenshotThemes()
	const runDir = opts.runDir
		? path.isAbsolute(opts.runDir)
			? opts.runDir
			: path.join(ROOT, opts.runDir)
		: path.join(ROOT, 'docs', 've-theme-generator-validation', timestampDir())

	await mkdir(runDir, { recursive: true })
	await writeFile(
		path.join(runDir, 'themes.txt'),
		`${themes.join('\n')}\n`,
		'utf8',
	)

	console.log(`Run directory: ${runDir}`)
	console.log(`Themes (${themes.length}): ${themes.join(', ')}\n`)

	const results = []

	if (!opts.verifyOnly) {
		if (opts.familiesOnly) {
			console.log('=== PHASE 1: Regenerate family styles only ===\n')
			for (const theme of themes) {
				console.log(`\n--- Generate families: ${theme} ---`)
				const logPath = path.join(runDir, `generate-${theme}.log`)
				const args = [
					'scripts/generate-ve-theme.mjs',
					`--theme=${theme}`,
					'--mode=families',
				]
				if (opts.force) args.push('--force')
				const { code, output } = await runCommand('node', args, logPath)
				const gen = parseGenerationSummary(output)
				results.push({
					theme,
					phase: 'generate',
					exitCode: code,
					...gen,
					logFile: path.relative(ROOT, logPath),
				})
			}
		} else {
			console.log('=== PHASE 1: Generate all themes ===\n')
			for (const theme of themes) {
				console.log(`\n--- Generate: ${theme} ---`)
				const logPath = path.join(runDir, `generate-${theme}.log`)
				const args = [
					'scripts/generate-ve-theme.mjs',
					`--theme=${theme}`,
					'--mode=all',
					'--no-patch-shell',
				]
				if (opts.force) args.push('--force')
				const { code, output } = await runCommand('node', args, logPath)
				const gen = parseGenerationSummary(output)
				results.push({
					theme,
					phase: 'generate',
					exitCode: code,
					...gen,
					logFile: path.relative(ROOT, logPath),
				})
			}

			console.log('\n=== PHASE 1b: Patch Ve2Shell + index.html for all themes ===\n')
			const themeSlugs = await listGeneratedThemeSlugs()
			const shellPatch = await patchAllVe2ShellThemes(themeSlugs)
			const htmlPatch = await patchAllIndexHtmlFonts(themeSlugs)
			const patchLog = path.join(runDir, 'patch-shell.log')
			await writeFile(
				patchLog,
				`Themes registered: ${themeSlugs.length}\n${themeSlugs.join('\n')}\n\nShell: ${JSON.stringify(shellPatch)}\nHTML fonts: ${JSON.stringify(htmlPatch)}\n`,
				'utf8',
			)
			results.push({
				theme: '(patch-shell)',
				phase: 'patch-shell',
				exitCode: 0,
				ok: true,
				themeCount: themeSlugs.length,
				logFile: path.relative(ROOT, patchLog),
			})
		}

		console.log('\n=== PHASE 2: Build ve-project2 ===\n')
		const buildLog = path.join(runDir, 'build.log')
		const build = await runCommand('pnpm', ['ve2:build'], buildLog)
		results.push({
			theme: '(build)',
			phase: 'build',
			exitCode: build.code,
			ok: build.code === 0,
			logFile: path.relative(ROOT, buildLog),
		})

		if (build.code !== 0) {
			console.error('Build failed — aborting verification.')
			await writeSummary(runDir, themes, results)
			process.exit(1)
		}
	}

	if (!opts.generateOnly) {
		if (opts.verifyOnly) {
			console.log('=== Verify all themes (verify-only mode) ===\n')
		} else {
			console.log('\n=== PHASE 3: Verify themes one at a time ===\n')
		}

		if (!opts.skipSmoke) {
			console.log(`=== PHASE 3a: Smoke test (${SMOKE_ROUTES.split(',').length} routes per theme) ===\n`)
		}

		for (const theme of themes) {
			let smokeOk = opts.skipSmoke

			if (!opts.skipSmoke) {
				console.log(`\n--- Smoke: ${theme} ---`)
				const smokeLog = path.join(runDir, `smoke-${theme}.log`)
				const smoke = await runThemeVerification(theme, smokeLog, { smoke: true })
				const smokeBlockers = parseVerificationBlockers(smoke.output)
				const smokeVerify = parseVerificationSummary(smoke.output)
				smokeOk = smoke.code === 0 && smokeBlockers.length === 0

				results.push({
					theme,
					phase: 'smoke',
					exitCode: smoke.code,
					...smokeVerify,
					blockers: smokeBlockers,
					ok: smokeOk,
					logFile: path.relative(ROOT, smokeLog),
				})

				if (!smokeOk) {
					console.error(
						`Smoke FAILED for ${theme}${smokeBlockers.length ? `: ${smokeBlockers.join('; ')}` : ''} — skipping full verification`,
					)
					results.push({
						theme,
						phase: 'verify',
						exitCode: smoke.code,
						skipped: true,
						ok: false,
						reason: `smoke failed: ${smokeBlockers.join('; ') || 'non-zero exit'}`,
						logFile: path.relative(ROOT, smokeLog),
					})
					continue
				}
				console.log(`Smoke OK for ${theme} — proceeding to full verification`)
			}

			console.log(`\n--- Verify: ${theme} ---`)
			const logPath = path.join(runDir, `verify-${theme}.log`)
			const { code, output } = await runThemeVerification(theme, logPath, { smoke: false })
			const blockers = parseVerificationBlockers(output)
			const verify = parseVerificationSummary(output)
			const ok =
				code === 0 &&
				blockers.length === 0 &&
				(verify.mismatched === 0 || verify.mismatched === null) &&
				(verify.failed === 0 || verify.failed === null)
			results.push({
				theme,
				phase: 'verify',
				exitCode: code,
				...verify,
				blockers,
				ok,
				logFile: path.relative(ROOT, logPath),
			})
			if (!ok) {
				console.error(
					`Full verification issues for ${theme}${blockers.length ? `: ${blockers.join('; ')}` : ''}`,
				)
			}
		}
	}

	await writeSummary(runDir, themes, results)
	console.log(`\nSummary written to ${path.join(runDir, 'SUMMARY.md')}`)
}

async function writeSummary(runDir, themes, results) {
	const genResults = results.filter((r) => r.phase === 'generate')
	const smokeResults = results.filter((r) => r.phase === 'smoke')
	const verifyResults = results.filter((r) => r.phase === 'verify')
	const buildResult = results.find((r) => r.phase === 'build')

	const lines = []
	lines.push('# VE Theme Generator — Batch Run Summary')
	lines.push('')
	lines.push(`Run directory: \`${path.relative(ROOT, runDir).replace(/\\/g, '/')}\``)
	lines.push(`Generated: ${new Date().toISOString()}`)
	lines.push(`Themes: ${themes.length}`)
	lines.push('')

	if (buildResult) {
		lines.push('## Build')
		lines.push('')
		lines.push(`| Step | Exit code | Status | Log |`)
		lines.push(`|------|-----------|--------|-----|`)
		lines.push(
			`| ve2:build | ${buildResult.exitCode} | ${buildResult.ok ? 'OK' : 'FAILED'} | [build.log](./build.log) |`,
		)
		lines.push('')
	}

	if (genResults.length > 0) {
		lines.push('## Generation')
		lines.push('')
		lines.push('| Theme | Exit | Status | Log |')
		lines.push('|-------|------|--------|-----|')
		for (const r of genResults) {
			lines.push(
				`| ${r.theme} | ${r.exitCode} | ${r.ok ? 'OK' : 'FAILED'} | [generate-${r.theme}.log](./generate-${r.theme}.log) |`,
			)
		}
		const genFailed = genResults.filter((r) => !r.ok || r.exitCode !== 0).length
		lines.push('')
		lines.push(`**Generation:** ${genResults.length - genFailed}/${genResults.length} succeeded`)
		lines.push('')
	}

	if (smokeResults.length > 0) {
		lines.push('## Smoke test (3 routes per theme)')
		lines.push('')
		lines.push(`Routes: ${SMOKE_ROUTES}`)
		lines.push('')
		lines.push('| Theme | Exit | Matched | Mismatched | Blockers | Status | Log |')
		lines.push('|-------|------|---------|------------|----------|--------|-----|')
		for (const r of smokeResults) {
			const matched = r.passed ?? '—'
			const mismatched = r.mismatched ?? r.failed ?? '—'
			const blockers = r.blockers?.length ? r.blockers.join('; ') : '—'
			const status = r.ok ? 'PASS' : 'FAIL'
			lines.push(
				`| ${r.theme} | ${r.exitCode} | ${matched} | ${mismatched} | ${blockers} | ${status} | [smoke-${r.theme}.log](./smoke-${r.theme}.log) |`,
			)
		}
		const smokePass = smokeResults.filter((r) => r.ok).length
		lines.push('')
		lines.push(`**Smoke:** ${smokePass}/${smokeResults.length} passed`)
		lines.push('')
	}

	if (verifyResults.length > 0) {
		lines.push('## Full verification (one theme at a time)')
		lines.push('')
		lines.push('| Theme | Exit | Matched | Mismatched | Skipped | Blockers | Status | Log |')
		lines.push('|-------|------|---------|------------|---------|----------|--------|-----|')
		for (const r of verifyResults) {
			const matched = r.passed ?? '—'
			const mismatched = r.mismatched ?? r.failed ?? '—'
			const skipped = r.skipped === true ? 'smoke-fail' : (r.skipped ?? '—')
			const blockers = r.blockers?.length ? r.blockers.join('; ') : r.reason ?? '—'
			let status = 'UNKNOWN'
			if (r.skipped === true) status = 'SKIPPED'
			else if (r.exitCode !== 0) status = 'ERROR'
			else if (r.blockers?.length) status = 'BLOCKED'
			else if (r.mismatched === 0 || r.failed === 0) status = 'PASS'
			else if (r.mismatched != null || r.failed != null) status = 'FAIL'
			lines.push(
				`| ${r.theme} | ${r.exitCode} | ${matched} | ${mismatched} | ${skipped} | ${blockers} | ${status} | [verify-${r.theme}.log](./verify-${r.theme}.log) |`,
			)
		}
		const verifyPass = verifyResults.filter((r) => r.ok).length
		const verifyFail = verifyResults.filter((r) => !r.ok).length
		lines.push('')
		lines.push(`**Full verification:** ${verifyPass} passed, ${verifyFail} failed/skipped (of ${verifyResults.length} themes)`)
		lines.push('')
	}

	await writeFile(path.join(runDir, 'SUMMARY.md'), lines.join('\n'), 'utf8')

	// JSON for machine use
	await writeFile(path.join(runDir, 'summary.json'), JSON.stringify({ themes, results }, null, 2), 'utf8')
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
