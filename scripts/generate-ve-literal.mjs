#!/usr/bin/env node
/**
 * T4 CLI — v2 literal emitter.
 *
 * Usage:
 *   node scripts/generate-ve-literal.mjs --theme=bootstrap
 *   node scripts/generate-ve-literal.mjs --theme=bootstrap --dry-run --strict
 *   node scripts/generate-ve-literal.mjs --all-themes
 *   node scripts/generate-ve-literal.mjs --theme=bootstrap --filter=.btn
 *
 * Options:
 *   --theme=<slug>    Emit styles for one theme
 *   --all-themes      Emit styles for all 27 themes
 *   --dry-run         Translate + report without writing files
 *   --strict          Exit non-zero if any selectors were skipped
 *   --filter=<str>    Only process selectors containing <str> (debug)
 *   --show-skipped    Print every skipped selector to stdout
 */

import process from 'node:process'

import { emitLiteralStyles } from './generate-ve-literal/emit.mjs'
import { ALL_THEMES } from './generate-ve-literal/registry.mjs'

function parseArgs(argv) {
	const args = argv.slice(2)
	return {
		allThemes: args.includes('--all-themes'),
		dryRun: args.includes('--dry-run'),
		strict: args.includes('--strict'),
		showSkipped: args.includes('--show-skipped'),
		theme: (args.find((a) => a.startsWith('--theme=')) ?? '').slice('--theme='.length) || null,
		filter: (args.find((a) => a.startsWith('--filter=')) ?? '').slice('--filter='.length) || null,
	}
}

function printReport(theme, report, outPath, dryRun) {
	const tag = dryRun ? '[dry-run]' : '[emit]'
	const dest = dryRun ? '' : `  → ${outPath}`
	console.log(
		`${tag} ${theme.padEnd(12)} emitted=${report.emitted}  ` +
		`skipped=${report.skippedCount}  keyframes=${report.keyframesEmitted}${dest}`,
	)
}

function printSkipped(theme, report) {
	if (report.skipped.length === 0) return
	console.log(`\n  Skipped in ${theme} (${report.skipped.length}):`)
	for (const { selector, reason } of report.skipped) {
		console.log(`    ${reason.padEnd(30)} ${selector}`)
	}
}

async function main() {
	const { allThemes, dryRun, strict, showSkipped, theme, filter } = parseArgs(process.argv)

	if (!theme && !allThemes) {
		console.error('Usage: node scripts/generate-ve-literal.mjs --theme=<slug> | --all-themes [--dry-run] [--strict]')
		process.exit(1)
	}

	const themes = allThemes ? ALL_THEMES : [theme]

	let anyFailed = false
	let totalEmitted = 0
	let totalSkipped = 0

	for (const t of themes) {
		try {
			const { report, outPath, exitCode } = await emitLiteralStyles(t, { filter, dryRun, strict })
			totalEmitted += report.emitted
			totalSkipped += report.skippedCount
			printReport(t, report, outPath, dryRun)
			if (showSkipped) printSkipped(t, report)
			if (exitCode !== 0) anyFailed = true
		} catch (err) {
			console.error(`[error] ${t}: ${err.message}`)
			if (strict) anyFailed = true
		}
	}

	if (themes.length > 1) {
		console.log(`\nTotal: emitted=${totalEmitted}  skipped=${totalSkipped} across ${themes.length} themes`)
	}

	process.exit(anyFailed ? 1 : 0)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
