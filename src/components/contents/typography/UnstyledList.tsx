import type { Component } from 'solid-js'

const UnstyledList: Component = () => (
	<div class="bd-example container-fluid">
		<ul class="list-unstyled">
			<li>This is a list.</li>
			<li>It appears completely unstyled.</li>
			<li>Structurally, it's still a list.</li>
			<li>However, this style only applies to immediate child elements.</li>
			<li>
				Nested lists:
				<ul>
					<li>are unaffected by this style</li>
					<li>will still show a bullet</li>
					<li>and have appropriate left margin</li>
				</ul>
			</li>
			<li>This may still come in handy in some situations.</li>
		</ul>
	</div>
)

export default UnstyledList

// @screenshot *: 360x240 240
// @screenshot brite: 360x210 210
// @screenshot cyborg: 360x264 264
// @screenshot litera: 360x291 291
// @screenshot lux: 360x264 264
// @screenshot materia: 360x264 264
// @screenshot morph: 360x264 264
// @screenshot sandstone: 360x264 264
// @screenshot simplex: 360x264 264
// @screenshot spacelab: 360x264 264
// @screenshot united: 360x264 264
// @screenshot yeti: 360x264 264
// @screenshot zephyr: 360x264 264
