import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { formControl } from '../../../theme-contract/forms/contract.css'
import { elButton, elInput } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	active,
	alignTop,
	bgLight,
	bgPrimary,
	dInlineBlock,
	disabled,
	navbarDark,
	navbarLight,
} from '../../../theme-contract/literal/contract.css'
import {
	btn,
	btnOutlineDark,
	btnOutlineLight,
	inputFontFamily,
} from '../../../theme-contract/ui/buttons/contract.css'
import {
	dropdown,
	dropdownDivider,
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import {
	collapse,
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
import { dFlex, mb2, mbLg0, me2, meAuto, mt5 } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/navbar',
	'ui/navs',
	'ui/dropdowns',
	'ui/buttons',
	'forms',
	'contents/basic',
	'utilities/used',
]

const NavbarExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<nav
				class={`${theme} ${navbar} ${navbarExpandLg} ${navbarBgLight} ${navbarLight} ${bgLight}`}
			>
				<div class={`${theme} ${containerFluid}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navbarBrand}`}
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="/assets/brand/bootstrap-logo-white.svg"
							width="38"
							height="30"
							alt="Bootstrap"
							loading="lazy"
							class={`${theme} ${dInlineBlock} ${alignTop}`}
							style="filter: invert(1) grayscale(100%) brightness(200%);"
						/>
					</a>
					<button
						class={`${theme} ${elButton} ${inputFontFamily} ${navbarToggler}`}
						type="button"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class={`${theme} ${navbarTogglerIcon}`} />
					</button>
					<div
						class={`${theme} ${collapse} ${navbarCollapse}`}
						id="navbarSupportedContent"
					>
						<ul class={`${theme} ${navbarNav} ${meAuto} ${mb2} ${mbLg0}`}>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${navLinkActive} ${active}`}
									aria-current="page"
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Home
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink}`}
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Link
								</a>
							</li>
							<li class={`${theme} ${navItem} ${dropdown}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${dropdownToggle}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									id="navbarDropdown"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul
									class={`${theme} ${dropdownMenu}`}
									aria-labelledby="navbarDropdown"
								>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Action
										</a>
									</li>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Another action
										</a>
									</li>
									<li>
										<hr class={`${theme} ${dropdownDivider}`} />
									</li>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${navLinkDisabled} ${disabled}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									tabindex="-1"
									aria-disabled="true"
								>
									Disabled
								</a>
							</li>
						</ul>
						<form class={`${theme} ${dFlex}`}>
							<input
								class={`${theme} ${elInput} ${formControl} ${me2}`}
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								class={`${theme} ${elButton} ${inputFontFamily} ${btn} ${btnOutlineDark}`}
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>

			<nav
				class={`${theme} ${navbar} ${navbarExpandLg} ${navbarDarkBgPrimary} ${navbarDark} ${bgPrimary} ${mt5}`}
			>
				<div class={`${theme} ${containerFluid}`}>
					{/* biome-ignore lint: <a> is used for demonstration purposes */}
					<a
						class={`${theme} ${link} ${navbarBrand}`}
						href="#"
						onClick={(e) => e.preventDefault()}
					>
						<img
							src="/assets/brand/bootstrap-logo-white.svg"
							width="38"
							height="30"
							alt="Bootstrap"
							loading="lazy"
							class={`${theme} ${dInlineBlock} ${alignTop}`}
						/>
					</a>
					<button
						class={`${theme} ${elButton} ${inputFontFamily} ${navbarToggler}`}
						type="button"
						aria-controls="navbarSupportedContent2"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class={`${theme} ${navbarTogglerIcon}`} />
					</button>
					<div
						class={`${theme} ${collapse} ${navbarCollapse}`}
						id="navbarSupportedContent2"
					>
						<ul class={`${theme} ${navbarNav} ${meAuto} ${mb2} ${mbLg0}`}>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${navLinkActive} ${active}`}
									aria-current="page"
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Home
								</a>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink}`}
									href="#"
									onClick={(e) => e.preventDefault()}
								>
									Link
								</a>
							</li>
							<li class={`${theme} ${navItem} ${dropdown}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${dropdownToggle}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									id="navbarDropdown2"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<ul
									class={`${theme} ${dropdownMenu}`}
									aria-labelledby="navbarDropdown2"
								>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Action
										</a>
									</li>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Another action
										</a>
									</li>
									<li>
										<hr class={`${theme} ${dropdownDivider}`} />
									</li>
									<li>
										{/* biome-ignore lint: <a> is used for demonstration purposes */}
										<a
											class={`${theme} ${link} ${dropdownItem}`}
											href="#"
											onClick={(e) => e.preventDefault()}
										>
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li class={`${theme} ${navItem}`}>
								{/* biome-ignore lint: <a> is used for demonstration purposes */}
								<a
									class={`${theme} ${link} ${navLink} ${navLinkDisabled} ${disabled}`}
									href="#"
									onClick={(e) => e.preventDefault()}
									tabindex="-1"
									aria-disabled="true"
								>
									Disabled
								</a>
							</li>
						</ul>
						<form class={`${theme} ${dFlex}`}>
							<input
								class={`${theme} ${elInput} ${formControl} ${me2}`}
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								class={`${theme} ${elButton} ${inputFontFamily} ${btn} ${btnOutlineLight}`}
								type="submit"
							>
								Search
							</button>
						</form>
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
