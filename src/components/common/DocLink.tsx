import type { Component, JSX } from 'solid-js'

type DocLinkProps = {
	href: string
	children?: JSX.Element
}

const DocLink: Component<DocLinkProps> = (props) => (
	<a class="d-flex align-items-center" href={props.href}>
		{props.children ?? 'Documentation'}
	</a>
)

export default DocLink
