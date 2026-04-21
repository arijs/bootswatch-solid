import process from 'node:process'

import { DEFAULT_VIEWPORT } from './constants.mjs'
import { parseCsvArg, parseFloatArg, parseIntArg } from './utils.mjs'

export function parseCaptureCli(argv = process.argv.slice(2)) {
	return {
		skipExisting: argv.includes('--skip-existing'),
		buildBeforeCapture: argv.includes('--build'),
		writebackEnabled: !argv.includes('--no-writeback'),
		dryRunWriteback: argv.includes('--dry-run-writeback'),
		cssExtractionEnabled: !argv.includes('--no-css-extraction'),
		verificationEnabled: argv.includes('--verify-css-rendering'),
		verificationMaxDiffRatio: parseFloatArg(argv, '--verify-max-diff-ratio', 0.001, 0),
		strictScenarioAssert: argv.includes('--strict-scenarios'),
		routeFilter: parseCsvArg(argv, '--route'),
		themeFilter: parseCsvArg(argv, '--theme'),
		stateFilter: parseCsvArg(argv, '--state'),
		requestedWidth: parseIntArg(argv, '--width', DEFAULT_VIEWPORT.width),
	}
}
