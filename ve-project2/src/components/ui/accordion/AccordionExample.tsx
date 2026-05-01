import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { h4 } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
accordion,
accordionBody,
accordionButton,
accordionButtonCollapsed,
accordionCollapse,
accordionCollapseShow,
accordionHeader,
accordionItem,
} from '../../../theme-contract/ui/accordion/contract.css'

const AccordionExample: Component = () => {
const theme = useContext(ThemeContext)
return (
<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
<div class={`${theme} ${accordion}`} id="accordionExample">
<div class={`${theme} ${accordionItem}`}>
<h4 class={`${theme} ${h4} ${accordionHeader}`} id="headingOne">
<button
class={`${theme} ${accordionButton}`}
type="button"
					data-bs-toggle="collapse"
data-bs-target="#collapseOne"
aria-expanded="true"
aria-controls="collapseOne"
>
Accordion Item #1
</button>
</h4>
<section
id="collapseOne"
class={`${theme} ${accordionCollapse} ${accordionCollapseShow}`}
aria-labelledby="headingOne"
data-bs-parent="#accordionExample"
>
<div class={`${theme} ${accordionBody}`}>
<strong>This is the first item's accordion body.</strong> It is hidden by
default, until the collapse plugin adds the appropriate classes that we use
to style each element. These classes control the overall appearance, as well
as the showing and hiding via CSS transitions. You can modify any of this
with custom CSS or overriding our default variables. It's also worth noting
that just about any HTML can go within the <code>.accordion-body</code>,
though the transition does limit overflow.
</div>
</section>
</div>
<div class={`${theme} ${accordionItem}`}>
<h4 class={`${theme} ${h4} ${accordionHeader}`} id="headingTwo">
<button
class={`${theme} ${accordionButton} ${accordionButtonCollapsed}`}
type="button"
					data-bs-toggle="collapse"
data-bs-target="#collapseTwo"
aria-expanded="false"
aria-controls="collapseTwo"
>
Accordion Item #2
</button>
</h4>
<section
id="collapseTwo"
class={`${theme} ${accordionCollapse}`}
aria-labelledby="headingTwo"
data-bs-parent="#accordionExample"
>
<div class={`${theme} ${accordionBody}`}>
<strong>This is the second item's accordion body.</strong> It is hidden by
default, until the collapse plugin adds the appropriate classes that we use
to style each element. These classes control the overall appearance, as well
as the showing and hiding via CSS transitions. You can modify any of this
with custom CSS or overriding our default variables. It's also worth noting
that just about any HTML can go within the <code>.accordion-body</code>,
though the transition does limit overflow.
</div>
</section>
</div>
<div class={`${theme} ${accordionItem}`}>
<h4 class={`${theme} ${h4} ${accordionHeader}`} id="headingThree">
<button
class={`${theme} ${accordionButton} ${accordionButtonCollapsed}`}
type="button"
					data-bs-toggle="collapse"
data-bs-target="#collapseThree"
aria-expanded="false"
aria-controls="collapseThree"
>
Accordion Item #3
</button>
</h4>
<section
id="collapseThree"
class={`${theme} ${accordionCollapse}`}
aria-labelledby="headingThree"
data-bs-parent="#accordionExample"
>
<div class={`${theme} ${accordionBody}`}>
<strong>This is the third item's accordion body.</strong> It is hidden by
default, until the collapse plugin adds the appropriate classes that we use
to style each element. These classes control the overall appearance, as well
as the showing and hiding via CSS transitions. You can modify any of this
with custom CSS or overriding our default variables. It's also worth noting
that just about any HTML can go within the <code>.accordion-body</code>,
though the transition does limit overflow.
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
