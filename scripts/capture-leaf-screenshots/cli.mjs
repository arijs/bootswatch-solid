import process from 'node:process'

import { DEFAULT_VIEWPORT } from './constants.mjs'
import { parseCsvArg, parseFloatArg, parseIntArg } from './utils.mjs'

const BOOLEAN_FLAGS = new Set([
	'--skip-existing',
	'--build',
	'--no-writeback',
	'--dry-run-writeback',
	'--no-css-extraction',
	'--verify-css-rendering',
	'--verify-ve-rendering',
	'--ve-missing-only',
	'--strict-scenarios',
])

const VALUE_FLAG_PREFIXES = [
	'--max-themes=',
	'--verify-max-diff-ratio=',
	'--route=',
	'--theme=',
	'--state=',
	'--width=',
]

function assertKnownArgs(argv) {
	const unknownArgs = argv.filter((arg) => {
		if (BOOLEAN_FLAGS.has(arg)) return false
		if (VALUE_FLAG_PREFIXES.some((prefix) => arg.startsWith(prefix))) return false
		return true
	})

	if (unknownArgs.length === 0) {
		return
	}

	const allowed = [
		...Array.from(BOOLEAN_FLAGS),
		...VALUE_FLAG_PREFIXES.map((prefix) => `${prefix}<value>`),
	]
	throw new Error(
		`Unknown CLI argument(s): ${unknownArgs.join(', ')}. Allowed arguments: ${allowed.join(', ')}`,
	)
}

export function parseCaptureCli(argv = process.argv.slice(2)) {
	assertKnownArgs(argv)

	const verificationEnabled = argv.includes('--verify-css-rendering')
	const veMissingOnly = argv.includes('--ve-missing-only')
	const veVerificationEnabled = argv.includes('--verify-ve-rendering') || veMissingOnly
	if (verificationEnabled && veVerificationEnabled) {
		throw new Error(
			'--verify-css-rendering and --verify-ve-rendering are mutually exclusive. Choose one verification mode per run.',
		)
	}
	const anyVerificationEnabled = verificationEnabled || veVerificationEnabled
	// Verification automatically disables CSS extraction (two-phase: extract first, then verify)
	const cssExtractionEnabled = !anyVerificationEnabled && !argv.includes('--no-css-extraction')

	const maxThemes = parseIntArg(argv, '--max-themes', 1)

	return {
		skipExisting: argv.includes('--skip-existing'),
		buildBeforeCapture: argv.includes('--build'),
		writebackEnabled: !anyVerificationEnabled && !argv.includes('--no-writeback'),
		dryRunWriteback: argv.includes('--dry-run-writeback'),
		cssExtractionEnabled,
		verificationEnabled,
		veVerificationEnabled,
		veMissingOnly,
		verificationMaxDiffRatio: parseFloatArg(argv, '--verify-max-diff-ratio', 0.001, 0),
		strictScenarioAssert: argv.includes('--strict-scenarios'),
		// Route filters accept exact paths and glob patterns (matched via micromatch).
		routeFilter: parseCsvArg(argv, '--route'),
		themeFilter: parseCsvArg(argv, '--theme'),
		stateFilter: parseCsvArg(argv, '--state'),
		maxThemes,
		requestedWidth: parseIntArg(argv, '--width', DEFAULT_VIEWPORT.width),
	}
}
