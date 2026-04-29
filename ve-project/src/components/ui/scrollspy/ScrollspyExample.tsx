import type { Component } from 'solid-js'
import {
	useVeContentsThemeClasses,
	useVeDropdownThemeClasses,
	useVeNavbarThemeClasses,
	useVeNavThemeClasses,
	useVeScrollspyThemeClasses,
} from '../../../themes/runtime/hooks'

const ScrollspyExample: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		dropdown,
		dropdownDivider,
		dropdownItem,
		dropdownMenu,
		dropdownToggle,
	} = useVeDropdownThemeClasses()
	const { nav, navItem, navLink, navLinkActive, navPills } = useVeNavThemeClasses()
	const { bgLight, navbar, navbarBrand } = useVeNavbarThemeClasses()
	const { h4, paragraph, px3 } = useVeContentsThemeClasses()
	const { scrollspyExample } = useVeScrollspyThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<nav class={`${navbar} ${bgLight} ${px3}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class={navbarBrand} href="#" onClick={(event) => event.preventDefault()}>
					Navbar
				</a>
				<ul class={`${nav} ${navPills}`}>
					<li class={navItem}>
						<a class={`${navLink} ${navLinkActive}`} href="#fat">
							@fat
						</a>
					</li>
					<li class={navItem}>
						<a class={navLink} href="#mdo">
							@mdo
						</a>
					</li>
					<li class={`${navItem} ${dropdown}`}>
						{/* biome-ignore lint: <a> is used for demonstration purposes */}
						<a
							class={`${navLink} ${dropdownToggle}`}
							href="#"
							onClick={(event) => event.preventDefault()}
							aria-expanded="false"
						>
							Dropdown
						</a>
						<ul class={dropdownMenu}>
							<li>
								<a class={dropdownItem} href="#one">
									one
								</a>
							</li>
							<li>
								<a class={dropdownItem} href="#two">
									two
								</a>
							</li>
							<li>
								<hr class={dropdownDivider} />
							</li>
							<li>
								<a class={dropdownItem} href="#three">
									three
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class={scrollspyExample} tabindex="0">
				<h4 class={h4} id="fat">
					@fat
				</h4>
				<p class={paragraph}>
					Placeholder content for the scrollspy example. You got the finest architecture.
					Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock.
					Never planned that one day I'd be losing you. She eats your heart out. Your kiss
					is cosmic, every move is magic. I mean the ones, I mean like she's the one.
					Greetings loved ones let's take a journey. Just own the night like the 4th of
					July! But you'd rather get wasted.
				</p>
				<h4 class={h4} id="mdo">
					@mdo
				</h4>
				<p class={paragraph}>
					Placeholder content for the scrollspy example. 'Cause she's the muse and the
					artist. (This is how we do) So you wanna play with magic. So just be sure before
					you give it all to me. I'm walking, I'm walking on air (tonight). Skip the talk,
					heard it all, time to walk the walk.
				</p>
				<h4 class={h4} id="one">
					one
				</h4>
				<p class={paragraph}>
					Placeholder content for the scrollspy example. Takes you miles high, so high,
					'cause she's got that one international smile. There's a stranger in my bed,
					there's a pounding in my head. Oh, no. In another life I would make you stay.
					'Cause I, I'm capable of anything. Suiting up for my crowning battle. Used to
					steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn
					it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I
					had a choice.
				</p>
				<h4 class={h4} id="two">
					two
				</h4>
				<p class={paragraph}>
					Placeholder content for the scrollspy example. It's time to bring out the big
					balloons. I'm walking, I'm walking on air (tonight). Yeah, we maxed our credit
					cards and got kicked out of the bar. Yo, shout out to all you kids, buying
					bottle service, with your rent money. I'm ma get your heart racing in my
					skin-tight jeans. If you get the chance you better keep her. Yo, shout out to
					all you kids, buying bottle service, with your rent money.
				</p>
				<h4 class={h4} id="three">
					three
				</h4>
				<p class={paragraph}>
					Placeholder content for the scrollspy example. If you wanna dance, if you want
					it all, you know that I'm the girl that you should call. Walk through the storm
					I would. So let me get you in your birthday suit. The one that got away. Last
					Friday night, yeah I think we broke the law, always say we're gonna stop. 'Cause
					she's a little bit of Yoko, And she's a little bit of 'Oh no'. I want the jaw
					droppin', eye poppin', head turnin', body shockin'. Yeah, we maxed our credit
					cards and got kicked out of the bar.
				</p>
				<p class={paragraph}>And some more placeholder content, for good measure.</p>
			</div>
		</div>
	)
}

export default ScrollspyExample

// @screenshot *: 360x1553 1629
// @screenshot brite: 360x1336 1336
// @screenshot cosmo: 360x1481 1481
// @screenshot cyborg: 360x1547 1547
// @screenshot darkly: 360x1561 1561
// @screenshot flatly: 360x1561 1561
// @screenshot journal: 360x1546 1546
// @screenshot litera: 360x1800 1800
// @screenshot lumen: 360x1485 1485
// @screenshot lux: 360x1756 1756
// @screenshot materia: 360x1575 1575
// @screenshot morph: 360x1585 1585
// @screenshot pulse: 360x1576 1576
// @screenshot quartz: 360x1609 1609
// @screenshot sandstone: 360x1529 1529
// @screenshot simplex: 360x1677 1677
// @screenshot sketchy: 360x1317 1317
// @screenshot slate: 360x1571 1571
// @screenshot solar: 360x1481 1481
// @screenshot spacelab: 360x1651 1651
// @screenshot superhero: 360x1505 1505
// @screenshot united: 360x1601 1601
// @screenshot vapor: 360x1505 1505
// @screenshot yeti: 360x1651 1651
// @screenshot zephyr: 360x1682 1682
