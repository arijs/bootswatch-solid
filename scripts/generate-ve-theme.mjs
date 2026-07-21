#!/usr/bin/env node
/**
 * VE Scope Generator
 *
 * Generates the shared per-theme scope.css.ts + fonts.generated.css that every loader depends
 * on (the literal loader and the still-live theme/granular runtime). The heuristic family-emit
 * generator was removed in T10 (see docs/ve2-literal-conversion-plan.md); the literal converter
 * (scripts/generate-ve-literal.mjs) emits the monolith styles. The granular re-enablement will
 * add a literal-based per-family split on top of this same scope foundation.
 *
 * Usage:
 *   node scripts/generate-ve-theme.mjs --theme=darkly --force
 *   node scripts/generate-ve-theme.mjs --all-themes --force
 *   node scripts/generate-ve-theme.mjs --theme=darkly --dry-run
 */

import process from 'node:process'
import { ALL_THEMES } from './generate-ve-literal/registry.mjs'
import { generateThemeScope } from './generate-ve-theme/scope-generate.mjs'

function parseArgs(argv) {
	const opts = { theme: null, allThemes: false, dryRun: false, force: false, mode: 'scope' }
	for (const arg of argv) {
		if (arg.startsWith('--theme=')) opts.theme = arg.slice('--theme='.length)
		else if (arg === '--all-themes') opts.allThemes = true
		else if (arg.startsWith('--mode=')) opts.mode = arg.slice('--mode='.length)
		else if (arg === '--dry-run') opts.dryRun = true
		else if (arg === '--force') opts.force = true
		else if (arg === '--help' || arg === '-h') {
			printHelp()
			process.exit(0)
		}
	}
	return opts
}

function printHelp() {
	console.log(`VE Scope Generator

Generates per-theme scope.css.ts + fonts.generated.css (shared infrastructure imported by
every loader). The heuristic family-emit generator was removed in T10; use
scripts/generate-ve-literal.mjs for the literal monolith styles.

Usage:
  node scripts/generate-ve-theme.mjs --theme=<slug> [options]
  node scripts/generate-ve-theme.mjs --all-themes [options]

Options:
  --theme=<slug>   Theme slug, e.g. darkly, materia
  --all-themes     Regenerate scope + fonts for all themes
  --dry-run        Print actions without writing files
  --force          Overwrite existing files (respects @keep-manual unless forced)
`)
}

function printReport(report) {
	for (const step of report.steps) {
		if (step.step === 'scope') {
			const status = step.scope?.written
				? 'written'
				: step.scope?.dryRun
					? 'dry-run'
					: (step.scope?.reason ?? 'skipped')
			console.log(`  ${report.theme} scope: ${status}`)
			if (step.fonts)
				console.log(
					`  ${report.theme} fonts: ${step.fonts.written ? 'written' : (step.fonts.reason ?? 'skipped')}`,
				)
		} else if (step.step === 'patch-index-html') {
			console.log(
				`  ${report.theme} index.html: ${step.patched ? 'patched' : (step.reason ?? 'skipped')}`,
			)
		}
	}
}

async function main() {
	const opts = parseArgs(process.argv.slice(2))

	// Back-compat: this CLI used to drive scaffold/families/report/all modes. Only scope
	// generation survives T10 (the heuristic family-emit generator was removed); accept the
	// scope/all aliases and point the removed modes at the literal generator.
	if (opts.mode === 'families' || opts.mode === 'report' || opts.mode === 'scaffold') {
		console.error(
			`Error: --mode=${opts.mode} was removed in T10 along with the heuristic family-emit generator.\n` +
				`Use scripts/generate-ve-literal.mjs for the literal monolith styles. Only scope/fonts\n` +
				`generation remains here (--mode=scope, the default).`,
		)
		process.exit(1)
	}

	const themes = opts.allThemes ? ALL_THEMES : opts.theme ? [opts.theme] : null
	if (!themes) {
		console.error('Error: --theme=<slug> or --all-themes is required')
		printHelp()
		process.exit(1)
	}

	if (opts.dryRun) console.log('Dry run — no files will be written.\n')

	for (const theme of themes) {
		const report = await generateThemeScope(theme, { dryRun: opts.dryRun, force: opts.force })
		printReport(report)
	}

	console.log('\nDone.')
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
