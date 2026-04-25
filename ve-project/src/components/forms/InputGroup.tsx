import type { Component } from 'solid-js'
import DocLink from '../common/DocLink'
import CurrencyAddon from './input-group/CurrencyAddon'
import PrefixAddon from './input-group/PrefixAddon'
import SuffixAddon from './input-group/SuffixAddon'
import TextareaAddon from './input-group/TextareaAddon'
import UrlAddon from './input-group/UrlAddon'

const InputGroup: Component = () => (
	<article class="my-3" id="input-group">
		<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
			<h3>Input group</h3>
			<DocLink href="/forms/input-group" />
			<DocLink href="/forms/input-group/prefix-addon">Prefix Addon</DocLink>
			<DocLink href="/forms/input-group/suffix-addon">Suffix Addon</DocLink>
			<DocLink href="/forms/input-group/url-addon">URL Addon</DocLink>
			<DocLink href="/forms/input-group/currency-addon">Currency Addon</DocLink>
			<DocLink href="/forms/input-group/textarea-addon">Textarea Addon</DocLink>
		</div>

		<div>
			<PrefixAddon />
			<SuffixAddon />
			<UrlAddon />
			<CurrencyAddon />
			<TextareaAddon />
		</div>
	</article>
)

export default InputGroup
