import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import LargePagination from './pagination/LargePagination'
import SmallPagination from './pagination/SmallPagination'
import StandardPagination from './pagination/StandardPagination'

const Pagination: Component = () => (
	<article class="my-3" id="pagination">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Pagination</h3>
			<DocLink href="/ui/pagination" />
			<DocLink href="/ui/pagination/small-pagination">Small Pagination</DocLink>
			<DocLink href="/ui/pagination/standard-pagination">Standard Pagination</DocLink>
			<DocLink href="/ui/pagination/large-pagination">Large Pagination</DocLink>
		</div>

		<div>
			<SmallPagination />
			<StandardPagination />
			<LargePagination />
		</div>
	</article>
)

export default Pagination
