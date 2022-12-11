import { createSignal } from 'solid-js'
import Counter from './Counter'
import Paginate from './Paginate'
import type { Component } from 'solid-js'

const Listing: Component = () => {
	const [current, setCurrent] = createSignal(1000)
	const [last, setLast] = createSignal(1999)

	return <div class="paginate-example">
		<div>
			Current page: <Counter count={current()} setCount={setCurrent} />
		</div>
		<div>
			Last page: <Counter count={last()} setCount={setLast} />
		</div>
		<Paginate current={current()} last={last()} />
	</div>

}

export default Listing
