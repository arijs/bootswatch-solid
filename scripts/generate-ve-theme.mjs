#!/usr/bin/env node
/**
 * VE Theme Source Generator
 *
 * Generates ve-project2/src/themes/{theme}/** from screenshot CSS artifacts.
 *
 * Usage:
 *   node scripts/generate-ve-theme.mjs --theme=darkly --mode=all
 *   node scripts/generate-ve-theme.mjs --theme=materia --mode=families --families=ui/alerts
 *   node scripts/generate-ve-theme.mjs --theme=darkly --mode=report
 *   node scripts/generate-ve-theme.mjs --theme=darkly --mode=scope --dry-run
 *   node scripts/generate-ve-theme.mjs --theme=darkly --verify
 */

import { spawn } from 'node:child_process'
import process from 'node:process'

import { EMIT_FAMILIES } from './generate-ve-theme/constants.mjs'
import { generateReport, generateTheme } from './generate-ve-theme/families-emitter.mjs'

function parseArgs(argv) {
	const opts = {
		theme: null,
		mode: 'all',
		families: [...EMIT_FAMILIES],
		dryRun: false,
		force: false,
		referenceTheme: 'bootstrap',
		patchShell: true,
		verify: false,
		verifyTheme: null,
	}

	for (const arg of argv) {
		if (arg.startsWith('--theme=')) opts.theme = arg.slice('--theme='.length)
		else if (arg.startsWith('--mode=')) opts.mode = arg.slice('--mode='.length)
		else if (arg.startsWith('--families=')) {
			opts.families = arg
				.slice('--families='.length)
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean)
		} else if (arg.startsWith('--reference-theme=')) {
			opts.referenceTheme = arg.slice('--reference-theme='.length)
		} else if (arg === '--dry-run') opts.dryRun = true
		else if (arg === '--force') opts.force = true
		else if (arg === '--no-patch-shell') opts.patchShell = false
		else if (arg === '--verify') opts.verify = true
		else if (arg.startsWith('--verify-theme=')) {
			opts.verify = true
			opts.verifyTheme = arg.slice('--verify-theme='.length)
		} else if (arg === '--help' || arg === '-h') {
			printHelp()
			process.exit(0)
		}
	}

	return opts
}

function printHelp() {
	console.log(`VE Theme Source Generator

Usage:
  node scripts/generate-ve-theme.mjs --theme=<slug> [options]

Modes:
  scaffold   Create theme folder tree + empty family files + shell wiring
  scope      Generate scope.css.ts + fonts.generated.css
  families   Generate selected family styles.css.ts files
  all        scaffold + scope + families (default)
  report     List unmapped selectors per family (no writes)

Options:
  --theme=<slug>           Theme slug (required), e.g. darkly, materia
  --families=a,b           Comma-separated family ids (default: all 24)
  --reference-theme=<slug> Structural reference theme (default: bootstrap)
  --dry-run                Print actions without writing files
  --force                  Overwrite existing files (respects @keep-manual unless forced)
  --no-patch-shell         Skip Ve2Shell.tsx / index.html patches
  --verify                 Run ve2:build + screenshot verification after generation
  --verify-theme=<slug>    Theme for verification (defaults to --theme value)

Examples:
  node scripts/generate-ve-theme.mjs --theme=materia --mode=families --families=ui/alerts
  node scripts/generate-ve-theme.mjs --theme=darkly --mode=report
  node scripts/generate-ve-theme.mjs --theme=darkly --mode=scope --dry-run
`)
}

function printReport(report) {
	console.log(`\n=== VE Theme Report: ${report.theme} ===\n`)
	for (const entry of report.families) {
		console.log(`${entry.family}: ${entry.ruleCount} selectors`)
		if (entry.unmapped.length > 0) {
			for (const u of entry.unmapped.slice(0, 5)) {
				console.log(`  [UNMAPPED] ${u.selector} — ${u.reason}`)
			}
			if (entry.unmapped.length > 5) {
				console.log(`  ... and ${entry.unmapped.length - 5} more`)
			}
		}
	}
}

function printGenerationReport(report) {
	console.log(`\n=== VE Theme Generation: ${report.theme} (mode=${report.mode}) ===\n`)
	for (const step of report.steps) {
		if (step.step === 'scaffold') {
			console.log(`Scaffold: created ${step.created?.length ?? 0}, skipped ${step.skipped?.length ?? 0}`)
		} else if (step.step === 'scope') {
			console.log(`Scope: ${step.scope?.written ? 'written' : step.scope?.dryRun ? 'dry-run' : 'skipped'}`)
			if (step.fonts) console.log(`Fonts: ${step.fonts.written ? 'written' : 'none/skipped'}`)
		} else if (step.step === 'families') {
			for (const r of step.results ?? []) {
				const status = r.written ? 'written' : r.dryRun ? 'dry-run' : r.reason ?? 'skipped'
				const warnCount = r.warnings?.length ?? 0
				console.log(`  ${r.family}: ${status}${warnCount ? ` (${warnCount} warnings)` : ''}`)
			}
		} else {
			console.log(`${step.step}: ${JSON.stringify(step)}`)
		}
	}
}

function runCommand(command, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, { stdio: 'inherit', shell: true })
		child.on('close', (code) => {
			if (code === 0) resolve()
			else reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`))
		})
	})
}

async function runVerification(themeSlug) {
	console.log(`\n=== Verification: building ve-project2 ===`)
	await runCommand('pnpm', ['ve2:build'])
	console.log(`\n=== Verification: screenshot parity for theme=${themeSlug} ===`)
	await runCommand('node', [
		'scripts/capture-leaf-screenshots.mjs',
		`--theme=${themeSlug}`,
		'--verify-ve-rendering',
	])
}

async function main() {
	const opts = parseArgs(process.argv.slice(2))

	if (!opts.theme) {
		console.error('Error: --theme=<slug> is required')
		printHelp()
		process.exit(1)
	}

	const validModes = ['scaffold', 'scope', 'families', 'all', 'report']
	if (!validModes.includes(opts.mode)) {
		console.error(`Error: invalid mode "${opts.mode}". Valid: ${validModes.join(', ')}`)
		process.exit(1)
	}

	if (opts.mode === 'report') {
		const report = await generateReport(opts.theme, opts.families)
		printReport(report)
		process.exit(0)
	}

	if (opts.dryRun) console.log('Dry run — no files will be written.\n')

	const report = await generateTheme(opts.theme, {
		mode: opts.mode,
		families: opts.families,
		dryRun: opts.dryRun,
		force: opts.force,
		referenceTheme: opts.referenceTheme,
		patchShell: opts.patchShell && !opts.dryRun,
	})

	printGenerationReport(report)

	if (opts.verify && !opts.dryRun) {
		const verifyTheme = opts.verifyTheme ?? opts.theme
		await runVerification(verifyTheme)
	}

	console.log('\nDone.')
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
