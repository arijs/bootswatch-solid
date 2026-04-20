import type { Component } from 'solid-js'

const CurrencyAddon: Component = () => (
	<div class="bd-example container-fluid">
		<div class="input-group mb-3">
			<span class="input-group-text">$</span>
			<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
			<span class="input-group-text">.00</span>
		</div>
	</div>
)

export default CurrencyAddon

// @screenshot *: 360x120 120
