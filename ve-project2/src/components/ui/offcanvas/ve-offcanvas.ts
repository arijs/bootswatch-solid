import * as bootstrap from 'bootstrap'
import { hiding, showing } from '../../../theme-contract/literal/contract.css'
// Shared state classes `show`/`fade` resolve to ui/navs/contract.css in the
// generated monoliths (specific-family priority over literal), so the adapter
// must stamp the SAME hashes — matching every other JS-driven family. `showing`
// and `hiding` are offcanvas-only and live in literal/contract.css.
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

interface VeOffcanvasRuntimeClasses {
	name: string
	offcanvasBackdrop: string
}

export function createVeOffcanvas(runtime: VeOffcanvasRuntimeClasses): typeof bootstrap.Offcanvas {
	return (
		bootstrap.Offcanvas as unknown as BootstrapWithDefaults<typeof bootstrap.Offcanvas>
	).extendDefaultConfig({
		NAME: runtime.name,
		CLASS_NAME_SHOW: show,
		CLASS_NAME_SHOWING: showing,
		CLASS_NAME_HIDING: hiding,
		// The created backdrop element must carry the scoped offcanvas-backdrop
		// contract (z-index 1040, below the panel) — NOT the Backdrop default
		// `modal-backdrop` (z-index 1050, which would paint over the panel).
		CLASS_NAME_BACKDROP: runtime.offcanvasBackdrop,
		OPEN_SELECTOR: `.pwhook-offcanvas.${show}`,
		SELECTOR_DATA_TOGGLE: `[data-bs-toggle="${runtime.name}"]`,
		BackdropClass:
			// @ts-expect-error bootstrap runtime exposes this but types do not
			(
				bootstrap.Backdrop as unknown as BootstrapWithDefaults<typeof bootstrap.Backdrop>
			).extendDefaultConfig({
				CLASS_NAME_FADE: fade,
				CLASS_NAME_SHOW: show,
				// @ts-expect-error bootstrap runtime exposes this but types do not
			}) as typeof bootstrap.Backdrop,
	}) as typeof bootstrap.Offcanvas
}

export function configureVeOffcanvas(
	runtime: VeOffcanvasRuntimeClasses,
): typeof bootstrap.Offcanvas {
	const VeOffcanvas = createVeOffcanvas(runtime)
	// @ts-expect-error bootstrap runtime exposes this but types do not
	VeOffcanvas.destroy()
	// @ts-expect-error bootstrap runtime exposes this but types do not
	VeOffcanvas.init()
	return VeOffcanvas
}
