import type { Component } from 'solid-js'
import UiSection from './ui/UiSection'

/**
 * This file was taken from the cheatsheet example of bootstrap.
 * You will most likely remove it if using this template.
 */

const HomePage: Component = () => {
	return (
		<div class="bd-cheatsheet-root">
			<header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
				<div class="container-fluid d-flex align-items-center">
					<h1 class="d-flex align-items-center fs-4 text-white mb-0">
						Bootstrap Cheatsheet
					</h1>
				</div>
			</header>
			<aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
				<h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
				<nav class="small" id="toc">
					<ul class="list-unstyled">
						<li class="my-2">
							<button
								type="button"
								class="btn d-inline-flex align-items-center collapsed"
								data-bs-toggle="collapse"
								aria-expanded="false"
								data-bs-target="#ui-collapse"
								aria-controls="ui-collapse"
							>
								UI
							</button>
							<ul class="list-unstyled ps-3 collapse" id="ui-collapse">
								<li>
									<a
										class="d-inline-flex align-items-center rounded"
										href="#buttons"
									>
										Buttons
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</aside>
			<div class="bd-cheatsheet container-fluid REM_bg-body">
				<UiSection />
			</div>
		</div>
	)
}

export default HomePage
