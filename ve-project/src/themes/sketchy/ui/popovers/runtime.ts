import { h3 } from '../../contents/generated.css'
import {
popoverArrow,
popoverBody,
popoverClass,
frame as popoverFrame,
frameColumn as popoverFrameColumn,
frameRow as popoverFrameRow,
popoverHeader,
justifyEnd as popoverJustifyEnd,
justifyStart as popoverJustifyStart,
} from './base.css'

export const sketchyPopoverRuntimeClasses = {
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
