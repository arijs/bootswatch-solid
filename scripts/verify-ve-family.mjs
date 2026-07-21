#!/usr/bin/env node
/**
 * DEPRECATED — this script ran whole families (or all families) at once, which
 * meant re-building and re-verifying large batches on every invocation. That is
 * exactly the expensive full re-validation we want to avoid.
 *
 * Use capture-leaf-screenshots.mjs with --skip-to-route= instead. It processes
 * routes in order from the given route forward, so you resume where you left off
 * rather than re-running everything. Pair with --bail-on-mismatch to stop at the
 * first failure, fix it, then resume with --skip-to-route=<that route>.
 */

const FIRST_ROUTE = '/contents/figures/figure-example'

console.error(
	[
		'verify-ve-family.mjs is disabled — it triggered expensive full re-validations.',
		'',
		'Use capture-leaf-screenshots.mjs with --skip-to-route= instead:',
		'',
		'  node scripts/capture-leaf-screenshots.mjs \\',
		'    --theme=<theme> \\',
		'    --verify-ve-rendering \\',
		'    --style-loader=granular \\',
		'    --skip-existing \\',
		'    --bail-on-mismatch \\',
		'    --skip-to-route=<route>',
		'',
		`Starting from scratch? Use the first route:  --skip-to-route=${FIRST_ROUTE}`,
		'Resuming after a fix? Pass the route you stopped on, e.g. --skip-to-route=/ui/modal/default-modal',
		'',
		'It processes routes in order from --skip-to-route forward, so you never',
		're-verify already-passing routes before it.',
	].join('\n'),
)
process.exit(1)
