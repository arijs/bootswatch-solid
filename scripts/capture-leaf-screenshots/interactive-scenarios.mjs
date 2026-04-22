import {
	BUTTON_HOVER_ROUTES,
	CONTEXTUAL_LIST_GROUP_COLOR_ROUTES,
	DROPDOWN_ROUTES,
	MODAL_ROUTES,
	POPOVER_ROUTES,
	TABLE_HOVER_COLOR_ROUTES,
	TOOLTIP_ROUTES,
} from './route-constants.mjs'

export const INTERACTIVE_SCENARIOS = [
	...BUTTON_HOVER_ROUTES.map((route) => ({
		route,
		state: 'hover-buttons',
		kind: 'hover',
		selector: '.btn',
	})),
	...DROPDOWN_ROUTES.map((route) => ({
		route,
		state: 'hover-dropdown',
		kind: 'hover',
		selector: '.dropdown-toggle',
	})),
	...DROPDOWN_ROUTES.map((route) => ({
		route,
		state: 'opened-dropdown',
		kind: 'click-visible',
		selector: '.dropdown-toggle',
		visibleSelector: '.dropdown-menu.show',
		resetMouseToCornerAfterAction: true,
	})),
	...TABLE_HOVER_COLOR_ROUTES.map((route) => ({
		route,
		state: 'hover-table-row',
		kind: 'hover',
		selector: '.table-hover tbody tr',
	})),
	...CONTEXTUAL_LIST_GROUP_COLOR_ROUTES.map((route) => ({
		route,
		state: 'hover-list-group',
		kind: 'hover',
		selector: '.list-group-item',
	})),
	{
		route: '/forms/overview/basic-form',
		state: 'focus-text-input',
		kind: 'focus',
		selector: 'input.form-control',
	},
	{
		route: '/forms/overview/checkbox',
		state: 'focus-checkbox',
		kind: 'focus-check',
		selector: (page, theme) =>
			theme === 'sketchy' ? page.getByText('Check me out') : 'input[type="checkbox"]',
	},
	{
		route: '/forms/overview/radio-buttons',
		state: 'focus-radio',
		kind: 'focus-check',
		selector: (page, theme) =>
			theme === 'sketchy' ? page.getByText('Default radio') : 'input[type="radio"]',
	},
	{
		route: '/forms/overview/switch-checkbox',
		state: 'focus-switch',
		kind: 'focus-check',
		selector: 'input[type="checkbox"]',
		locatorState: (theme) => (theme === 'sketchy' ? 'attached' : undefined),
	},
	{
		route: '/forms/overview/file-input',
		state: 'focus-file-input',
		kind: 'focus',
		selector: 'input[type="file"]',
	},
	{
		route: '/forms/overview/basic-form',
		state: 'typed-text-input',
		kind: 'type',
		selector: 'input.form-control',
		value: 'Sample text',
	},
	...TOOLTIP_ROUTES.map((route) => ({
		route,
		state: 'opened-tooltip',
		kind: 'hover-visible',
		selector: 'button[data-bs-toggle="tooltip"]',
		visibleSelector: '.tooltip.show',
	})),
	...POPOVER_ROUTES.map((route) => ({
		route,
		state: 'opened-popover',
		kind: 'click-visible',
		selector: 'button[data-bs-toggle="popover"]',
		visibleSelector: '.popover.show',
	})),
	...MODAL_ROUTES.map((route) => ({
		route,
		state: 'opened-modal',
		kind: 'click-visible',
		selector: '[data-bs-toggle="modal"]',
		visibleSelector: '.modal.show',
		settleDelayMs: 450,
	})),
]
