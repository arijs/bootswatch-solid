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
	'--verify-ve1-rendering',
	'--ve-missing-only',
	'--ve1-missing-only',
	'--ve1-runtime-missing-only',
	'--ve1-runtime-missing-leafs',
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
	const ve1MissingOnly = argv.includes('--ve1-missing-only')
	const ve1RuntimeMissingLeafs = argv.includes('--ve1-runtime-missing-leafs')
	const ve1RuntimeMissingOnly = argv.includes('--ve1-runtime-missing-only') || ve1RuntimeMissingLeafs
	const ve1VerificationEnabled = argv.includes('--verify-ve1-rendering') || ve1MissingOnly
	const veVerificationEnabled = argv.includes('--verify-ve-rendering')
	const veMissingOnly = argv.includes('--ve-missing-only')
	if (ve1RuntimeMissingOnly && ve1MissingOnly) {
		throw new Error(
			'--ve1-missing-only and --ve1-runtime-missing-only are mutually exclusive. Choose one fast-report mode per run.',
		)
	}
	if (ve1MissingOnly && veMissingOnly) {
		throw new Error(
			'--ve1-missing-only and --ve-missing-only are mutually exclusive. Choose one fast-report mode per run.',
		)
	}
	if (ve1RuntimeMissingOnly && (verificationEnabled || ve1VerificationEnabled)) {
		throw new Error(
			'--ve1-runtime-missing-only is mutually exclusive with verification modes. Remove --verify-css-rendering/--verify-ve1-rendering/--ve1-missing-only.',
		)
	}
	if (verificationEnabled && ve1VerificationEnabled) {
		throw new Error(
			'--verify-css-rendering and --verify-ve1-rendering are mutually exclusive. Choose one verification mode per run.',
		)
	}
	if (verificationEnabled && veVerificationEnabled) {
		throw new Error(
			'--verify-css-rendering and --verify-ve-rendering are mutually exclusive. Choose one verification mode per run.',
		)
	}
	if (ve1VerificationEnabled && veVerificationEnabled) {
		throw new Error(
			'--verify-ve1-rendering and --verify-ve-rendering are mutually exclusive. Choose one verification mode per run.',
		)
	}
	if (ve1RuntimeMissingLeafs) {
		throw new Error('--ve1-runtime-missing-leafs: Sorry my brotha, this is too verbose and you don\'t need it. Use --ve1-runtime-missing-only instead to get a concise report of missing routes for each theme.')
	}
	const anyVerificationEnabled = verificationEnabled || ve1VerificationEnabled || veVerificationEnabled
	// Verification automatically disables CSS extraction (two-phase: extract first, then verify)
	const cssExtractionEnabled = !anyVerificationEnabled && !argv.includes('--no-css-extraction')

	const maxThemesSpecified = argv.some((arg) => arg.startsWith('--max-themes='))
	const maxThemes = parseIntArg(argv, '--max-themes', 1)

	return {
		skipExisting: argv.includes('--skip-existing'),
		buildBeforeCapture: argv.includes('--build'),
		writebackEnabled: !anyVerificationEnabled && !argv.includes('--no-writeback'),
		dryRunWriteback: argv.includes('--dry-run-writeback'),
		cssExtractionEnabled,
		verificationEnabled,
		ve1VerificationEnabled,
		veVerificationEnabled,
		ve1MissingOnly,
		veMissingOnly,
		ve1RuntimeMissingOnly,
		ve1RuntimeMissingLeafs,
		verificationMaxDiffRatio: parseFloatArg(argv, '--verify-max-diff-ratio', 0.001, 0),
		strictScenarioAssert: argv.includes('--strict-scenarios'),
		maxThemesSpecified,
		// Route filters accept exact paths and glob patterns (matched via micromatch).
		routeFilter: parseCsvArg(argv, '--route'),
		themeFilter: parseCsvArg(argv, '--theme'),
		stateFilter: parseCsvArg(argv, '--state'),
		maxThemes,
		requestedWidth: parseIntArg(argv, '--width', DEFAULT_VIEWPORT.width),
	}
}
