import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body, bodyText } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h4 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import {
	btnPrimary,
	btnSecondary,
} from '../../../themes/bootstrap/ui/buttons/generated.css'
import { btnClose } from '../../../themes/bootstrap/ui/alerts/base.css'
import {
	actionsRow,
	fade,
	flexWrap,
	justifyContentBetween,
	modal,
	modalBody,
	modalContent,
	modalDialog,
	modalFade,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalTitle,
} from '../../../themes/bootstrap/ui/modal/base.css'
import './ve-modal'

const FullscreenModal: Component = () => (
		<>
			<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
				<div class={`${actionsRow} ${justifyContentBetween} ${flexWrap}`}>
					<button
						type="button"
						class={`${btn} ${btnPrimary} pwhook-modal-trigger`}
						data-bs-toggle="modal"
						data-bs-target="#exampleModalFullscreen"
					>
						Full screen
					</button>
				</div>
			</div>
			<div
				class={`${bsTheme} ${bodyText} ${modal} ${modalFade} ${fade} pwhook-modal`}
				id="exampleModalFullscreen"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				aria-labelledby="exampleModalFullscreenLabel"
				aria-hidden="true"
			>
				<div class={`${modalDialog} ${modalFullscreen}`}>
					<div class={modalContent}>
						<div class={modalHeader}>
							<h5 class={`${h4} ${modalTitle}`} id="exampleModalFullscreenLabel">
								Full screen modal
							</h5>
							<button
								type="button"
								class={btnClose}
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class={modalBody}>
							<p>
								What follows is just some placeholder text for this modal dialog. I feel
								like I'm already there. I'm gon' put her in a coma. Boom, boom, boom.
								You're reading me like erotica, boy, you make me feel exotic, yeah.
								Happy birthday. From Tokyo to Mexico, to Rio. I knew you were.
							</p>
							<p>
								Last Friday night. Calling out my name. Kiss her, touch her, squeeze her
								buns. Heavy is the head that wears the crown. So open up your heart and
								just let it begin. Boy all this time was worth the waiting. You know
								that I'm the girl that you should call. End of the rainbow looking
								treasure. You're reading me like erotica, boy, you make me feel exotic,
								yeah. Do you know that there's still a chance for you 'Cause there's a
								spark in you? So I sat quietly, agreed politely. From Tokyo to Mexico,
								to Rio.
							</p>
							<p>
								Don't be a shy kinda guy I'll bet it's beautiful. You fall asleep during
								foreplay, 'Cause the pills you take, are more your forte. Open up your
								heart. You're never gonna be unsatisfied. Know that you are worthy. This
								one goes out to the ladies at breakfast in last night's dress. You think
								you've seen her in a magazine. I should've told you what you meant to me
								'Cause now I pay the price. Takes you miles high, so high, 'cause she's
								got that one international smile.
							</p>
							<p>
								Yo, shout out to all you kids, buying bottle service, with your rent
								money. So I sat quietly, agreed politely. They say, be afraid you're not
								like the others, futuristic lover. Boom, boom, boom. Don't need
								apologies. We can dance, until we die, you and I, will be young forever.
								If you choose to walk away, don't walk away. You know that I'm the girl
								that you should call. This Friday night, do it all again.
							</p>
							<p>
								I'm walking on air. But lil' mama so dope. It's time to bring out the
								big balloons. Are you ready for, ready for. The boys break their necks
								try'na to creep a little sneak peek. Summer after high school when we
								first met. If you want it all. (This is how we do) You open my eyes and
								I'm ready to go, lead me into the light.
							</p>
							<p>
								Growing fast into a bolt of lightning. We freak in my jeep, Snoop Doggy
								Dogg on the stereo. Baby do you dare to do this? Open up your heart and
								just let it begin. Peach-pink lips, yeah, everybody stares. Be your
								teenage dream tonight. Are you brave enough to let me see your peacock?
								You think I'm funny when I tell the punchline wrong. Woo! I knew you
								were. All this money can't buy me a time machine. I can't sleep let's
								run away and don't ever look back, don't ever look back.
							</p>
							<p>
								Make it like your birthday everyday. I'm not sticking around to watch
								you go down. Uh-huh, I see you. For you I'll risk it all, all. I'm gon'
								put her in a coma. She ride me like a roller coaster. You hear my voice,
								you hear that sound. 'Cause I will love you unconditionally (oh yeah).
								They say, be afraid you're not like the others, futuristic lover. There
								is no fear now, let go and just be free, I will love you
								unconditionally.
							</p>
							<p>
								We can dance, until we die, you and I, will be young forever. Pop your
								Perignon. Last Friday night, yeah I think we broke the law, always say
								we're gonna stop. Don't need apologies. Give you something good to
								celebrate. But don't make me your enemy, your enemy, your enemy. Flowers
								in her hair, she don't care. Tone, tan fit and ready, turn it up cause
								its gettin' heavy.
							</p>
						</div>
						<div class={modalFooter}>
							<button type="button" class={`${btn} ${btnSecondary}`} data-bs-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)

export default FullscreenModal

// @screenshot *: 360x120 120
// @screenshot */opened-modal: 360x1800 1800
