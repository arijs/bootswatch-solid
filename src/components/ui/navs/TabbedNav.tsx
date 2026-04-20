import type { Component } from 'solid-js'

const TabbedNav: Component = () => (
	<div class="bd-example container-fluid">
		<nav>
			<div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
				<button
					class="nav-link active"
					id="nav-home-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-home"
					type="button"
					role="tab"
					aria-controls="nav-home"
					aria-selected="true"
				>
					Home
				</button>
				<button
					class="nav-link"
					id="nav-profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-profile"
					type="button"
					role="tab"
					aria-controls="nav-profile"
					aria-selected="false"
				>
					Profile
				</button>
				<button
					class="nav-link"
					id="nav-contact-tab"
					data-bs-toggle="tab"
					data-bs-target="#nav-contact"
					type="button"
					role="tab"
					aria-controls="nav-contact"
					aria-selected="false"
				>
					Contact
				</button>
			</div>
		</nav>
		<div class="tab-content" id="nav-tabContent">
			<div
				class="tab-pane fade show active"
				id="nav-home"
				role="tabpanel"
				aria-labelledby="nav-home-tab"
			>
				<p>
					Placeholder content for the tab panel. This one relates to the home tab. Takes
					you miles high, so high, 'cause she’s got that one international smile. There's
					a stranger in my bed, there's a pounding in my head. Oh, no. In another life I
					would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my
					crowning battle. Used to steal your parents' liquor and climb to the roof. Tone,
					tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug.
					I guess that I forgot I had a choice.
				</p>
			</div>
			<div
				class="tab-pane fade"
				id="nav-profile"
				role="tabpanel"
				aria-labelledby="nav-profile-tab"
			>
				<p>
					Placeholder content for the tab panel. This one relates to the profile tab. You
					got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh,
					fierce, we got it on lock. Never planned that one day I'd be losing you. She
					eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones,
					I mean like she's the one. Greetings loved ones let's take a journey. Just own
					the night like the 4th of July! But you'd rather get wasted.
				</p>
			</div>
			<div
				class="tab-pane fade"
				id="nav-contact"
				role="tabpanel"
				aria-labelledby="nav-contact-tab"
			>
				<p>
					Placeholder content for the tab panel. This one relates to the contact tab. Her
					love is like a drug. All my girls vintage Chanel baby. Got a motel and built a
					fort out of sheets. 'Cause she's the muse and the artist. (This is how we do) So
					you wanna play with magic. So just be sure before you give it all to me. I'm
					walking, I'm walking on air (tonight). Skip the talk, heard it all, time to walk
					the walk. Catch her if you can. Stinging like a bee I earned my stripes.
				</p>
			</div>
		</div>
	</div>
)

export default TabbedNav

// @screenshot *: 360x322 322
// @screenshot brite: 360x357 357
// @screenshot cosmo: 360x298 298
// @screenshot darkly: 360x363 363
// @screenshot flatly: 360x363 363
// @screenshot litera: 360x374 374
// @screenshot lumen: 360x304 304
// @screenshot lux: 360x368 368
// @screenshot materia: 360x344 344
// @screenshot morph: 360x320 320
// @screenshot pulse: 360x321 321
// @screenshot quartz: 360x336 336
// @screenshot sandstone: 360x320 320
// @screenshot simplex: 360x359 359
// @screenshot sketchy: 360x276 276
// @screenshot solar: 360x298 298
// @screenshot spacelab: 360x346 346
// @screenshot united: 360x346 346
// @screenshot vapor: 360x320 320
// @screenshot yeti: 360x346 346
// @screenshot zephyr: 360x361 361
