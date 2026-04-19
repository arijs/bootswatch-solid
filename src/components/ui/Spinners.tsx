import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'

const Spinners: Component = () => (
	<article class="my-3" id="spinners">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Spinners</h3>
			<DocLink href="/ui/spinners" />
		</div>

		<div>
			<div class="bd-example">
				<div class="spinner-border text-primary">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-secondary">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-success">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-danger">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-warning">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-info">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-light">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-border text-dark">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>

			<div class="bd-example">
				<div class="spinner-grow text-primary">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-secondary">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-success">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-danger">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-warning">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-info">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-light">
					<span class="visually-hidden">Loading...</span>
				</div>
				<div class="spinner-grow text-dark">
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		</div>
	</article>
)

export default Spinners
