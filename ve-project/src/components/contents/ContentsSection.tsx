import type { Component } from 'solid-js'
import { fwBold, pb2, pbXl3, pt3, ptXl5, stickyXlTop } from '../../themes/bootstrap/contents/generated.css'
import Figures from './Figures'
import Images from './Images'
import Tables from './Tables'
import Typography from './Typography'

const ContentsSection: Component = () => (
	<section id="content">
		<h2 class={`${stickyXlTop} ${fwBold} ${pt3} ${ptXl5} ${pb2} ${pbXl3}`}>Contents</h2>
		<Typography />
		<Images />
		<Tables />
		<Figures />
	</section>
)

export default ContentsSection
