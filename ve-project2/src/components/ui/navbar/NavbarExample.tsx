import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	navbar,
	navbarBgLight,
	navbarBrand,
	navbarCollapse,
	navbarDarkBgPrimary,
	navbarExpandLg,
	navbarNav,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../theme-contract/ui/navbar/contract.css'
import {
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
} from '../../../theme-contract/ui/navs/contract.css'

const NavbarExample: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<nav class={`${theme} ${navbar} ${navbarExpandLg} ${navbarBgLight}`}>
				<div class={`${theme} ${containerFluid}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={`${theme} ${navbarBrand}`} href="#" onClick={(e) => e.preventDefault()}>
						<img
							src="/assets/brand/bootstrap-logo-white.svg"
							width="38"
							height="30"
							alt="Bootstrap"
							loading="lazy"
							style="display: inline-block; vertical-align: top; filter: invert(1) grayscale(100%) brightness(200%);"
						/>
					</a>
					<button
						class={`${theme} ${navbarToggler}`}
						type="button"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class={`${theme} ${navbarTogglerIcon}`} />
					</button>
					<div class={`${theme} ${navbarCollapse}`} id="navbarSupportedContent">
						<ul class={`${theme} ${navbarNav}`} style={{ 'margin-right': 'auto', 'margin-bottom': '0.5rem' }}>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${navLink} ${navLinkActive}`}
									aria-current="page"
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Home
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
									Link
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${navLink} ${navLinkDisabled}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									tabindex="-1"
									aria-disabled="true"
								>
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<nav class={`${theme} ${navbar} ${navbarExpandLg} ${navbarDarkBgPrimary}`} style={{ 'margin-top': '3rem' }}>
				<div class={`${theme} ${containerFluid}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a class={`${theme} ${navbarBrand}`} href="#" onClick={(e) => e.preventDefault()}>
						<img
							src="/assets/brand/bootstrap-logo-white.svg"
							width="38"
							height="30"
							alt="Bootstrap"
							loading="lazy"
							style="display: inline-block; vertical-align: top;"
						/>
					</a>
					<button
						class={`${theme} ${navbarToggler}`}
						type="button"
						aria-controls="navbarSupportedContent2"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class={`${theme} ${navbarTogglerIcon}`} />
					</button>
					<div class={`${theme} ${navbarCollapse}`} id="navbarSupportedContent2">
						<ul class={`${theme} ${navbarNav}`} style={{ 'margin-right': 'auto', 'margin-bottom': '0.5rem' }}>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${navLink} ${navLinkActive}`}
									aria-current="page"
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Home
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a class={`${theme} ${navLink}`} href="#" onClick={(e) => e.preventDefault()}>
									Link
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${navLink} ${navLinkDisabled}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									tabindex="-1"
									aria-disabled="true"
								>
									Disabled
								</a>
							</li>
						</ul>
					</div>
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
// @screenshot journal: 360x166 166
// @screenshot litera: 360x166 166
// @screenshot lumen: 360x168 168
// @screenshot lux: 360x226 226
// @screenshot materia: 360x204 204
// @screenshot pulse: 360x205 205
// @screenshot quartz: 360x240 240
// @screenshot simplex: 360x190 190
// @screenshot sketchy: 360x172 172
// @screenshot spacelab: 360x164 164
// @screenshot zephyr: 360x183 183
