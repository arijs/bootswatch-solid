#!/usr/bin/env node
/**
 * Literal VE theme generator — full bootstrap.css → globalStyle monolith.
 *
 * Usage:
 *   node scripts/generate-ve-theme-literal.mjs --theme=bootstrap
 *   node scripts/generate-ve-theme-literal.mjs --theme=bootstrap --filter=.btn
 *   node scripts/generate-ve-theme-literal.mjs --theme=bootstrap --dry-run
 */

import process from 'node:process'

import { generateLiteralStyles } from './generate-ve-theme-literal/emit-literal.mjs'
import { generateScope } from './generate-ve-theme/families-emitter.mjs'
import { buildContractRegistry } from './generate-ve-theme/contract-registry.mjs'
import { loadThemeCss } from './generate-ve-theme/css-source.mjs'

function parseArgs(argv) {
	const opts = {
		theme: null,
		filter: null,
		dryRun: false,
		force: false,
		strict: false,
		withScope: true,
		autoContracts: false,
	}

	for (const arg of argv) {
		if (arg.startsWith('--theme=')) opts.theme = arg.slice('--theme='.length)
		else if (arg.startsWith('--filter=')) opts.filter = arg.slice('--filter='.length)
		else if (arg === '--dry-run') opts.dryRun = true
		else if (arg === '--force') opts.force = true
		else if (arg === '--strict') opts.strict = true
		else if (arg === '--no-scope') opts.withScope = false
		else if (arg === '--auto-contracts') opts.autoContracts = true
		else if (arg === '--help' || arg === '-h') {
			printHelp()
			process.exit(0)
		}
	}

	return opts
}

function printHelp() {
	console.log(`Literal VE Theme Generator

Reads screenshots/{theme}/bootstrap.css and emits:
  ve-project2/src/themes/{theme}/literal/styles.css.ts

Usage:
  node scripts/generate-ve-theme-literal.mjs --theme=bootstrap [options]

Options:
  --filter=<substring>   Only emit selectors containing this text (e.g. .btn)
  --dry-run              Print stats without writing files
  --force                Overwrite scope.css.ts when used with --with-scope
  --strict               Exit 1 if any selectors were skipped
  --no-scope             Skip scope.css.ts regeneration
  --auto-contracts       Generate missing .class → contract mappings (utilities/generated)
`)
}

async function main() {
	const opts = parseArgs(process.argv.slice(2))
	if (!opts.theme) {
		console.error('Error: --theme=<slug> is required')
		printHelp()
		process.exit(1)
	}

	const registry = await buildContractRegistry()

	if (opts.withScope) {
		const themeCss = await loadThemeCss(opts.theme)
		const scopeResult = await generateScope(opts.theme, registry, {
			dryRun: opts.dryRun,
			force: opts.force,
		})
		console.log('scope:', scopeResult.scope?.written ? 'written' : scopeResult.scope?.reason ?? 'ok')
	}

	const result = await generateLiteralStyles(opts.theme, {
		filter: opts.filter,
		dryRun: opts.dryRun,
		strict: opts.strict,
		autoContracts: opts.autoContracts,
	})

	console.log(`\nLiteral generation: ${opts.theme}`)
	console.log(`  Emitted rules: ${result.report.emitted}`)
	console.log(`  Skipped: ${result.report.skipped.length}`)
	console.log(
		`  Keyframes: ${result.report.keyframesEmitted}/${result.report.keyframes.length} (${result.report.keyframes.join(', ')})`,
	)
	if (opts.filter) console.log(`  Filter: ${opts.filter}`)
	if (!opts.dryRun) console.log(`  Output: ${result.outPath}`)

	if (result.report.skipped.length > 0 && result.report.skipped.length <= 20) {
		for (const { selector, warning } of result.report.skipped.slice(0, 20)) {
			console.log(`    ${warning} — ${selector}`)
		}
	} else if (result.report.skipped.length > 20) {
		console.log(`    (see literal-report.json for ${result.report.skipped.length} entries)`)
	}

	process.exit(result.exitCode)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
