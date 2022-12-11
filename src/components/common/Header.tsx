
import type { Component } from 'solid-js';
import ThemeDropdown from '../ThemeDropdown';

const Header: Component = () => {

	return <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container-fluid">
			<a
				class="navbar-brand d-flex align-items-center"
				href="/"
				onClick={(e) => e.preventDefault()}
			>
				<img
					src="/ddsoft-small-transparent.png"
					height="32"
					class="d-inline-block align-top me-2"
					alt="DDSOFT"
					loading="lazy"
				/>
				DDTEC
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent2"
				aria-controls="navbarSupportedContent2"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse"
				id="navbarSupportedContent2"
			>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="/"
							onClick={(e) => e.preventDefault()}
						>
							Início
						</a>
					</li>
				</ul>
				<ThemeDropdown />
			</div>
		</div>
	</nav>
}

export default Header
