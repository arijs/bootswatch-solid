import {
	justifyCenter,
	tooltipArrow,
	tooltipClass,
	frame as tooltipFrame,
	frameColumn as tooltipFrameColumn,
	frameRow as tooltipFrameRow,
	tooltipInner,
	justifyEnd as tooltipJustifyEnd,
	justifyStart as tooltipJustifyStart,
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
