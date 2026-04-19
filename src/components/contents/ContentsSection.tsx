import type { Component } from 'solid-js'
import Figures from './Figures'
import Images from './Images'
import Tables from './Tables'
import Typography from './Typography'

const ContentsSection: Component = () => (
	<section id="content">
		<h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Contents</h2>
		<Typography />
		<Images />
		<Tables />
		<Figures />
	</section>
)

export default ContentsSection
