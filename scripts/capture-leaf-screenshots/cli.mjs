import process from 'node:process'

import { DEFAULT_VIEWPORT } from './constants.mjs'
import { parseCsvArg, parseFloatArg, parseIntArg } from './utils.mjs'

export function parseCaptureCli(argv = process.argv.slice(2)) {
	const cssExtractionEnabled = !argv.includes('--no-css-extraction')
	const verificationEnabled = argv.includes('--verify-css-rendering')

	// Enforce two-phase execution: CSS extraction and verification cannot run together
	if (cssExtractionEnabled && verificationEnabled) {
		throw new Error(
			'CSS extraction and verification cannot run in the same execution. Run in two phases: (1) with CSS extraction enabled to generate CSS files, (2) with verification enabled (use --no-css-extraction --verify-css-rendering). When verification runs, it will automatically trigger a rebuild.',
		)
	}

	const maxThemes = parseIntArg(argv, '--max-themes', 1)

	return {
		skipExisting: argv.includes('--skip-existing'),
		buildBeforeCapture: argv.includes('--build'),
		writebackEnabled: !argv.includes('--no-writeback'),
		dryRunWriteback: argv.includes('--dry-run-writeback'),
		cssExtractionEnabled,
		verificationEnabled,
		verificationMaxDiffRatio: parseFloatArg(argv, '--verify-max-diff-ratio', 0.001, 0),
		strictScenarioAssert: argv.includes('--strict-scenarios'),
		routeFilter: parseCsvArg(argv, '--route'),
		themeFilter: parseCsvArg(argv, '--theme'),
		stateFilter: parseCsvArg(argv, '--state'),
		maxThemes,
		requestedWidth: parseIntArg(argv, '--width', DEFAULT_VIEWPORT.width),
	}
}
