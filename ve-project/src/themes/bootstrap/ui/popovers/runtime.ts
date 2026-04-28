import { h3 } from '../../contents/generated.css'
import {
	frame as popoverFrame,
	frameColumn as popoverFrameColumn,
	frameRow as popoverFrameRow,
	justifyEnd as popoverJustifyEnd,
	justifyStart as popoverJustifyStart,
	popoverArrow,
	popoverBody,
	popoverClass,
	popoverHeader,
} from './base.css'

export const bootstrapPopoverRuntimeClasses = {
	frame: popoverFrame,
	frameColumn: popoverFrameColumn,
	frameRow: popoverFrameRow,
	h3,
	justifyEnd: popoverJustifyEnd,
	justifyStart: popoverJustifyStart,
	popoverArrow,
	popoverBody,
	popoverClass,
	popoverHeader,
} as const
