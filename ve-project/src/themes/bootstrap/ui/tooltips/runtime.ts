import {
	frame as tooltipFrame,
	frameColumn as tooltipFrameColumn,
	frameRow as tooltipFrameRow,
	justifyCenter,
	justifyEnd as tooltipJustifyEnd,
	justifyStart as tooltipJustifyStart,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} from './base.css'

export const bootstrapTooltipRuntimeClasses = {
	frame: tooltipFrame,
	frameColumn: tooltipFrameColumn,
	frameRow: tooltipFrameRow,
	justifyCenter,
	justifyEnd: tooltipJustifyEnd,
	justifyStart: tooltipJustifyStart,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} as const
