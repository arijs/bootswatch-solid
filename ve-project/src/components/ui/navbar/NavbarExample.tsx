import type { Component } from 'solid-js'
import { useVeNavbarThemeClasses } from '../../../themes/runtime/hooks'

const brandSrc = '/assets/brand/bootstrap-logo-white.svg'

const NavbarExample: Component = () => {
	const {
		alignTop,
		bgLight,
		bgPrimary,
		body,
		bsTheme,
		containerFluid,
		dInlineBlock,
		mt5,
		navbar,
		navbarBrand,
		navbarDark,
		navbarInner,
		navbarLogoMuted,
		navbarToggler,
		navbarTogglerIcon,
	} = useVeNavbarThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<nav class={`${navbar} ${bgLight}`}>
				<div class={`${containerFluid} ${navbarInner}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={navbarBrand} href="#" onClick={(event) => event.preventDefault()}>
						<img
							src={brandSrc}
							width="38"
							height="30"
							class={`${dInlineBlock} ${alignTop} ${navbarLogoMuted}`}
							alt="Bootstrap"
							loading="lazy"
						/>
					</a>
					<button class={navbarToggler} type="button" aria-label="Toggle navigation">
						<span class={navbarTogglerIcon}></span>
					</button>
				</div>
			</nav>

			<nav class={`${navbar} ${navbarDark} ${bgPrimary} ${mt5}`}>
				<div class={`${containerFluid} ${navbarInner}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={navbarBrand} href="#" onClick={(event) => event.preventDefault()}>
						<img
							src={brandSrc}
							width="38"
							height="30"
							class={`${dInlineBlock} ${alignTop}`}
							alt="Bootstrap"
							loading="lazy"
						/>
					</a>
					<button class={navbarToggler} type="button" aria-label="Toggle navigation">
						<span class={navbarTogglerIcon}></span>
					</button>
				</div>
			</nav>
		</div>
	)
}

export default NavbarExample

// @screenshot *: 360x160 236
// @screenshot brite: 360x186 186
// @screenshot cyborg: 360x162 162
// @screenshot darkly: 360x192 192
// @screenshot flatly: 360x192 192
