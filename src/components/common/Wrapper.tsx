import { createMemo, ParentComponent } from 'solid-js';
import { classes } from '../../logic/classes';

export type WrapperStyle =
	| 'raw'
	| 'card-fill'
	| 'card-border'

export type WrapperBgColor =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'

export type WrapperTextColor =
	| 'default'
	| 'black'
	| 'white'

type WrapperProps = {
	style?: WrapperStyle | undefined
	bgColor?: WrapperBgColor | undefined
	textColor?: WrapperTextColor | undefined
	headerText?: string | undefined
}

const getCardClass = (props: WrapperProps) => {
	const classes: string[] = []
	const cardBgPre = null == props.style || 'raw' === props.style ? undefined :
		'card-fill' === props.style ? 'bg' :
		'card-border' === props.style ? 'border' :
		undefined
	const cardBgPost = null == props.bgColor || 'default' === props.bgColor ? undefined : props.bgColor
	const textColor = null == props.textColor || 'default' === props.textColor ? undefined : props.textColor
	if (null != cardBgPre && null != cardBgPost) classes.push(`${cardBgPre}-${cardBgPost}`)
	if (null != textColor) classes.push(`text-${textColor}`)
	return classes
}

const Wrapper: ParentComponent<WrapperProps> = (props) => {
	const isRaw = createMemo(() => null == props.style || 'raw' === props.style)

	return <>{isRaw() ? props.children : <div class={classes(`card my-3`, getCardClass(props))}>
		{ null != props.headerText && <div class="card-header">{props.headerText}</div> }
		<div class="card-body">
			{props.children}
		</div>
	</div>}</>

}

export default Wrapper
