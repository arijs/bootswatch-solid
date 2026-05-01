import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	flexWrap as paginationFlexWrap,
	paginationLarge,
	paginationSmall,
} from './base.css'

export const bootstrapPaginationRuntimeClasses = {
	flexWrap: paginationFlexWrap,
	pagination,
	paginationLarge,
	paginationSmall,
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
} as const
