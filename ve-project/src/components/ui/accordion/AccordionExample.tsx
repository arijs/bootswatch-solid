import * as bootstrap from 'bootstrap'
import { onSettled, type Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h4 } from '../../../themes/bootstrap/contents/generated.css'
import {
	accordion,
	accordionBody,
	accordionButton,
	accordionButtonCollapsed,
	accordionCollapse,
	accordionCollapseShow,
	accordionCollapsing,
	accordionHeader,
	accordionItem,
} from '../../../themes/bootstrap/ui/accordion/base.css'

const VeCollapse = (bootstrap.Collapse as any).extendDefaultConfig({
	CLASS_NAME_COLLAPSE: accordionCollapse,
	CLASS_NAME_COLLAPSED: accordionButtonCollapsed,
	CLASS_NAME_COLLAPSING: accordionCollapsing,
	CLASS_NAME_SHOW: accordionCollapseShow,
	SELECTOR_DATA_TOGGLE: '[data-ve-toggle="collapse"]',
}) as typeof bootstrap.Collapse

// @ts-expect-error this does exist, but the types are wrong
VeCollapse.destroy()
// @ts-expect-error
VeCollapse.init()

const AccordionExample: Component = () => {
	// let collapseOneRef: HTMLElement | undefined
	// let collapseTwoRef: HTMLElement | undefined
	// let collapseThreeRef: HTMLElement | undefined

	// onSettled(() => {
	// 	const targets = [collapseOneRef, collapseTwoRef, collapseThreeRef].filter(
	// 		(value): value is HTMLElement => value !== undefined,
	// 	)

	// 	for (const target of targets) {
	// 		new VeCollapse(target, { toggle: false })
	// 	}

	// 	return () => {
	// 		for (const target of targets) {
	// 			VeCollapse.getInstance(target)?.dispose()
	// 		}
	// 	}
	// })

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={accordion} id="accordionExample">
			<div class={accordionItem}>
				<h4 class={`${h4} ${accordionHeader}`} id="headingOne">
					<button
						class={accordionButton}
						type="button"
						data-ve-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						Accordion Item #1
					</button>
				</h4>
				<section
					// ref={(value) => {
					// 	collapseOneRef = value
					// }}
					id="collapseOne"
					class={`${accordionCollapse} ${accordionCollapseShow}`}
					aria-labelledby="headingOne"
					data-bs-parent="#accordionExample"
				>
					<div class={accordionBody}>
						<strong>This is the first item's accordion body.</strong> It is hidden by
						default, until the collapse plugin adds the appropriate classes that we
						use to style each element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions. You can modify
						any of this with custom CSS or overriding our default variables. It's
						also worth noting that just about any HTML can go within the{' '}
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</section>
			</div>
			<div class={accordionItem}>
				<h4 class={`${h4} ${accordionHeader}`} id="headingTwo">
					<button
						class={`${accordionButton} ${accordionButtonCollapsed}`}
						type="button"
						data-ve-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Accordion Item #2
					</button>
				</h4>
				<section
					// ref={(value) => {
					// 	collapseTwoRef = value
					// }}
					id="collapseTwo"
					class={accordionCollapse}
					aria-labelledby="headingTwo"
					data-bs-parent="#accordionExample"
				>
					<div class={accordionBody}>
						<strong>This is the second item's accordion body.</strong> It is hidden by
						default, until the collapse plugin adds the appropriate classes that we
						use to style each element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions. You can modify
						any of this with custom CSS or overriding our default variables. It's
						also worth noting that just about any HTML can go within the{' '}
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</section>
			</div>
			<div class={accordionItem}>
				<h4 class={`${h4} ${accordionHeader}`} id="headingThree">
					<button
						class={`${accordionButton} ${accordionButtonCollapsed}`}
						type="button"
						data-ve-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						Accordion Item #3
					</button>
				</h4>
				<section
					// ref={(value) => {
					// 	collapseThreeRef = value
					// }}
					id="collapseThree"
					class={accordionCollapse}
					aria-labelledby="headingThree"
					data-bs-parent="#accordionExample"
				>
					<div class={accordionBody}>
						<strong>This is the third item's accordion body.</strong> It is hidden by
						default, until the collapse plugin adds the appropriate classes that we
						use to style each element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions. You can modify
						any of this with custom CSS or overriding our default variables. It's
						also worth noting that just about any HTML can go within the{' '}
						<code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</section>
			</div>
		</div>
		</div>
	)
}

export default AccordionExample

// @screenshot *: 360x480 556
// @screenshot brite: 360x428 428
// @screenshot cosmo: 360x456 456
// @screenshot litera: 360x566 566
// @screenshot lumen: 360x456 456
// @screenshot lux: 360x524 524
// @screenshot morph: 360x476 476
// @screenshot quartz: 360x476 476
// @screenshot simplex: 360x504 504
// @screenshot sketchy: 360x437 437
// @screenshot solar: 360x456 456
// @screenshot spacelab: 360x504 504
// @screenshot superhero: 360x452 452
// @screenshot vapor: 360x452 452
// @screenshot yeti: 360x504 504
// @screenshot zephyr: 360x504 504
