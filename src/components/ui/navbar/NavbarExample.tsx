import type { Component } from 'solid-js'

const NavbarExample: Component = () => (
	<div class="bd-example container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
					<img
						src="../assets/brand/bootstrap-logo-white.svg"
						width="38"
						height="30"
						class="d-inline-block align-top"
						alt="Bootstrap"
						loading="lazy"
						style="filter: invert(1) grayscale(100%) brightness(200%);"
					/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link active"
								aria-current="page"
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Home
							</a>
						</li>
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link"
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Link
							</a>
						</li>
						<li class="nav-item dropdown">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link dropdown-toggle"
								href="#"
								onClick={(e) => e.preventDefault()}
								id="navbarDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Action
									</a>
								</li>
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Another action
									</a>
								</li>
								<li>
									<hr class="dropdown-divider" />
								</li>
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link disabled"
								href="#"
								onClick={(e) => e.preventDefault()}
								tabindex="-1"
								aria-disabled="true"
							>
								Disabled
							</a>
						</li>
					</ul>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-dark" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>

		<nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
			<div class="container-fluid">
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a class="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
					<img
						src="../assets/brand/bootstrap-logo-white.svg"
						width="38"
						height="30"
						class="d-inline-block align-top"
						alt="Bootstrap"
						loading="lazy"
					/>
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
				<div class="collapse navbar-collapse" id="navbarSupportedContent2">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link active"
								aria-current="page"
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Home
							</a>
						</li>
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link"
								href="#"
								onClick={(e) => e.preventDefault()}
							>
								Link
							</a>
						</li>
						<li class="nav-item dropdown">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link dropdown-toggle"
								href="#"
								onClick={(e) => e.preventDefault()}
								id="navbarDropdown2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Action
									</a>
								</li>
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Another action
									</a>
								</li>
								<li>
									<hr class="dropdown-divider" />
								</li>
								<li>
									{/* biome-ignore lint: <a> is used for demonstration purposes */}
									<a
										class="dropdown-item"
										href="#"
										onClick={(e) => e.preventDefault()}
									>
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							{/* biome-ignore lint: <a> is used for demonstration purposes */}
							<a
								class="nav-link disabled"
								href="#"
								onClick={(e) => e.preventDefault()}
								tabindex="-1"
								aria-disabled="true"
							>
								Disabled
							</a>
						</li>
					</ul>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-light" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	</div>
)

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
