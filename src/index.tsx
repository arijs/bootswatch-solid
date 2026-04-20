/* @refresh reload */

import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/web'
import './cheatsheet.scss'

// import 'bootstrap/scss/bootstrap.scss';

// Contents components
import ContentsSection from './components/contents/ContentsSection'
import Figures from './components/contents/Figures'
import FigureExample from './components/contents/figures/FigureExample'
import Images from './components/contents/Images'
import Responsive from './components/contents/images/Responsive'
import Thumbnail from './components/contents/images/Thumbnail'
import Tables from './components/contents/Tables'
import Typography from './components/contents/Typography'
import DarkBorderless from './components/contents/tables/DarkBorderless'
import HoverDangerVariant from './components/contents/tables/HoverDangerVariant'
import HoverDarkVariant from './components/contents/tables/HoverDarkVariant'
import HoverDefaultVariant from './components/contents/tables/HoverDefaultVariant'
import HoverInfoVariant from './components/contents/tables/HoverInfoVariant'
import HoverLightVariant from './components/contents/tables/HoverLightVariant'
import HoverPrimaryVariant from './components/contents/tables/HoverPrimaryVariant'
import HoverSecondaryVariant from './components/contents/tables/HoverSecondaryVariant'
import HoverSuccessVariant from './components/contents/tables/HoverSuccessVariant'
import HoverVariants from './components/contents/tables/HoverVariants'
import HoverWarningVariant from './components/contents/tables/HoverWarningVariant'
import SmallBordered from './components/contents/tables/SmallBordered'
import Striped from './components/contents/tables/Striped'
import Blockquote from './components/contents/typography/Blockquote'
import Display from './components/contents/typography/Display'
import Heading from './components/contents/typography/Heading'
import InlineList from './components/contents/typography/InlineList'
import Lead from './components/contents/typography/Lead'
import TextElements from './components/contents/typography/TextElements'
import UnstyledList from './components/contents/typography/UnstyledList'
// Forms components
import DisabledForms from './components/forms/DisabledForms'
import DisabledCheckbox from './components/forms/disabled/DisabledCheckbox'
import DisabledFieldset from './components/forms/disabled/DisabledFieldset'
import DisabledFileRange from './components/forms/disabled/DisabledFileRange'
import DisabledRadioButtons from './components/forms/disabled/DisabledRadioButtons'
import DisabledSwitchCheckbox from './components/forms/disabled/DisabledSwitchCheckbox'
import FloatingLabels from './components/forms/FloatingLabels'
import FloatingLabelsExample from './components/forms/floating-labels/FloatingLabelsExample'
import FormsSection from './components/forms/FormsSection'
import InputGroup from './components/forms/InputGroup'
import CurrencyAddon from './components/forms/input-group/CurrencyAddon'
import PrefixAddon from './components/forms/input-group/PrefixAddon'
import SuffixAddon from './components/forms/input-group/SuffixAddon'
import TextareaAddon from './components/forms/input-group/TextareaAddon'
import UrlAddon from './components/forms/input-group/UrlAddon'
import Overview from './components/forms/Overview'
import BasicForm from './components/forms/overview/BasicForm'
import Checkbox from './components/forms/overview/Checkbox'
import FileInput from './components/forms/overview/FileInput'
import RadioButtons from './components/forms/overview/RadioButtons'
import RangeInput from './components/forms/overview/RangeInput'
import SwitchCheckbox from './components/forms/overview/SwitchCheckbox'
import Sizing from './components/forms/Sizing'
import LargeControls from './components/forms/sizing/LargeControls'
import SmallControls from './components/forms/sizing/SmallControls'
import Validation from './components/forms/Validation'
import InvalidCheckboxes from './components/forms/validation/InvalidCheckboxes'
import InvalidRadios from './components/forms/validation/InvalidRadios'
import InvalidStateZip from './components/forms/validation/InvalidStateZip'
import InvalidUsernameCity from './components/forms/validation/InvalidUsernameCity'
import ValidCheckboxes from './components/forms/validation/ValidCheckboxes'
import ValidNames from './components/forms/validation/ValidNames'
import ValidRadios from './components/forms/validation/ValidRadios'
import Home from './components/HomePage'

// UI components
import Accordion from './components/ui/Accordion'
import AccordionExample from './components/ui/accordion/AccordionExample'
import Alerts from './components/ui/Alerts'
import DangerAlert from './components/ui/alerts/DangerAlert'
import DarkAlert from './components/ui/alerts/DarkAlert'
import HeadingAlert from './components/ui/alerts/HeadingAlert'
import InfoAlert from './components/ui/alerts/InfoAlert'
import LightAlert from './components/ui/alerts/LightAlert'
import PrimaryAlert from './components/ui/alerts/PrimaryAlert'
import SecondaryAlert from './components/ui/alerts/SecondaryAlert'
import SuccessAlert from './components/ui/alerts/SuccessAlert'
import WarningAlert from './components/ui/alerts/WarningAlert'
import Badge from './components/ui/Badge'
import Breadcrumb from './components/ui/Breadcrumb'
import BreadcrumbExample from './components/ui/breadcrumb/BreadcrumbExample'
import ButtonGroup from './components/ui/ButtonGroup'
import ButtonGroupExample from './components/ui/button-group/ButtonGroupExample'
import Buttons from './components/ui/Buttons'
import HeadingBadges from './components/ui/badge/HeadingBadges'
import PillBadges from './components/ui/badge/PillBadges'
import LargeButton from './components/ui/buttons/LargeButton'
import OutlineDangerButton from './components/ui/buttons/OutlineDangerButton'
import OutlineDarkButton from './components/ui/buttons/OutlineDarkButton'
import OutlineInfoButton from './components/ui/buttons/OutlineInfoButton'
import OutlineLightButton from './components/ui/buttons/OutlineLightButton'
import OutlinePrimaryButton from './components/ui/buttons/OutlinePrimaryButton'
import OutlineSecondaryButton from './components/ui/buttons/OutlineSecondaryButton'
import OutlineSuccessButton from './components/ui/buttons/OutlineSuccessButton'
import OutlineWarningButton from './components/ui/buttons/OutlineWarningButton'
import SmallButton from './components/ui/buttons/SmallButton'
import SolidDangerButton from './components/ui/buttons/SolidDangerButton'
import SolidDarkButton from './components/ui/buttons/SolidDarkButton'
import SolidInfoButton from './components/ui/buttons/SolidInfoButton'
import SolidLightButton from './components/ui/buttons/SolidLightButton'
import SolidLinkButton from './components/ui/buttons/SolidLinkButton'
import SolidPrimaryButton from './components/ui/buttons/SolidPrimaryButton'
import SolidSecondaryButton from './components/ui/buttons/SolidSecondaryButton'
import SolidSuccessButton from './components/ui/buttons/SolidSuccessButton'
import SolidWarningButton from './components/ui/buttons/SolidWarningButton'
import Card from './components/ui/Card'
import CardsGrid from './components/ui/card/CardsGrid'
import CardTabs from './components/ui/CardTabs'
import CardTabsExample from './components/ui/card-tabs/CardTabsExample'
import Carousel from './components/ui/Carousel'
import CarouselExample from './components/ui/carousel/CarouselExample'
import FeaturedCard from './components/ui/card/FeaturedCard'
import HorizontalCard from './components/ui/card/HorizontalCard'
import ImageTopCard from './components/ui/card/ImageTopCard'
import ListCard from './components/ui/card/ListCard'
import Dropdowns from './components/ui/Dropdowns'
import AlignedDropdown from './components/ui/dropdowns/AlignedDropdown'
import EndDropdown from './components/ui/dropdowns/EndDropdown'
import LargeDropdown from './components/ui/dropdowns/LargeDropdown'
import NormalDropdown from './components/ui/dropdowns/NormalDropdown'
import SmallDropdown from './components/ui/dropdowns/SmallDropdown'
import SplitDangerDropdown from './components/ui/dropdowns/SplitDangerDropdown'
import SplitDarkDropdown from './components/ui/dropdowns/SplitDarkDropdown'
import SplitInfoDropdown from './components/ui/dropdowns/SplitInfoDropdown'
import SplitLightDropdown from './components/ui/dropdowns/SplitLightDropdown'
import SplitPrimaryDropdown from './components/ui/dropdowns/SplitPrimaryDropdown'
import SplitSecondaryDropdown from './components/ui/dropdowns/SplitSecondaryDropdown'
import SplitSuccessDropdown from './components/ui/dropdowns/SplitSuccessDropdown'
import SplitWarningDropdown from './components/ui/dropdowns/SplitWarningDropdown'
import StartDropdown from './components/ui/dropdowns/StartDropdown'
import UpDropdown from './components/ui/dropdowns/UpDropdown'
import ListGroup from './components/ui/ListGroup'
import ContextualDangerListGroup from './components/ui/list-group/ContextualDangerListGroup'
import ContextualDarkListGroup from './components/ui/list-group/ContextualDarkListGroup'
import ContextualDefaultListGroup from './components/ui/list-group/ContextualDefaultListGroup'
import ContextualInfoListGroup from './components/ui/list-group/ContextualInfoListGroup'
import ContextualLightListGroup from './components/ui/list-group/ContextualLightListGroup'
import ContextualListGroup from './components/ui/list-group/ContextualListGroup'
import ContextualPrimaryListGroup from './components/ui/list-group/ContextualPrimaryListGroup'
import ContextualSecondaryListGroup from './components/ui/list-group/ContextualSecondaryListGroup'
import ContextualSuccessListGroup from './components/ui/list-group/ContextualSuccessListGroup'
import ContextualWarningListGroup from './components/ui/list-group/ContextualWarningListGroup'
import DefaultListGroup from './components/ui/list-group/DefaultListGroup'
import FlushListGroup from './components/ui/list-group/FlushListGroup'
import Modal from './components/ui/Modal'
import CenteredScrollableModal from './components/ui/modal/CenteredScrollableModal'
import DefaultModal from './components/ui/modal/DefaultModal'
import FullscreenModal from './components/ui/modal/FullscreenModal'
import StaticBackdropModal from './components/ui/modal/StaticBackdropModal'
import Navbar from './components/ui/Navbar'
import NavbarExample from './components/ui/navbar/NavbarExample'
import Navs from './components/ui/Navs'
import BasicNav from './components/ui/navs/BasicNav'
import PillNav from './components/ui/navs/PillNav'
import TabbedNav from './components/ui/navs/TabbedNav'
import Pagination from './components/ui/Pagination'
import Popovers from './components/ui/Popovers'
import Progress from './components/ui/Progress'
import LargePagination from './components/ui/pagination/LargePagination'
import SmallPagination from './components/ui/pagination/SmallPagination'
import StandardPagination from './components/ui/pagination/StandardPagination'
import BasicPopover from './components/ui/popovers/BasicPopover'
import BottomPopover from './components/ui/popovers/BottomPopover'
import EndPopover from './components/ui/popovers/EndPopover'
import StartPopover from './components/ui/popovers/StartPopover'
import TopPopover from './components/ui/popovers/TopPopover'
import Progress0 from './components/ui/progress/Progress0'
import Progress25 from './components/ui/progress/Progress25'
import Progress50 from './components/ui/progress/Progress50'
import Progress75 from './components/ui/progress/Progress75'
import Progress100 from './components/ui/progress/Progress100'
import StripedProgress from './components/ui/progress/StripedProgress'
import Scrollspy from './components/ui/Scrollspy'
import ScrollspyExample from './components/ui/scrollspy/ScrollspyExample'
import Spinners from './components/ui/Spinners'
import BorderDangerSpinner from './components/ui/spinners/BorderDangerSpinner'
import BorderDarkSpinner from './components/ui/spinners/BorderDarkSpinner'
import BorderInfoSpinner from './components/ui/spinners/BorderInfoSpinner'
import BorderLightSpinner from './components/ui/spinners/BorderLightSpinner'
import BorderPrimarySpinner from './components/ui/spinners/BorderPrimarySpinner'
import BorderSecondarySpinner from './components/ui/spinners/BorderSecondarySpinner'
import BorderSuccessSpinner from './components/ui/spinners/BorderSuccessSpinner'
import BorderWarningSpinner from './components/ui/spinners/BorderWarningSpinner'
import GrowDangerSpinner from './components/ui/spinners/GrowDangerSpinner'
import GrowDarkSpinner from './components/ui/spinners/GrowDarkSpinner'
import GrowInfoSpinner from './components/ui/spinners/GrowInfoSpinner'
import GrowLightSpinner from './components/ui/spinners/GrowLightSpinner'
import GrowPrimarySpinner from './components/ui/spinners/GrowPrimarySpinner'
import GrowSecondarySpinner from './components/ui/spinners/GrowSecondarySpinner'
import GrowSuccessSpinner from './components/ui/spinners/GrowSuccessSpinner'
import GrowWarningSpinner from './components/ui/spinners/GrowWarningSpinner'
import Toasts from './components/ui/Toasts'
import ToastExample from './components/ui/toasts/ToastExample'
import Tooltips from './components/ui/Tooltips'
import BottomTooltip from './components/ui/tooltips/BottomTooltip'
import EndTooltip from './components/ui/tooltips/EndTooltip'
import HtmlTooltip from './components/ui/tooltips/HtmlTooltip'
import StartTooltip from './components/ui/tooltips/StartTooltip'
import TopTooltip from './components/ui/tooltips/TopTooltip'
import UiSection from './components/ui/UiSection'

render(
	() => (
		<Router>
			<Route path="/" component={Home} />

			{/* Contents routes */}
			<Route path="/contents" component={ContentsSection} />
			<Route path="/contents/figures" component={Figures} />
			<Route path="/contents/figures/figure-example" component={FigureExample} />
			<Route path="/contents/images" component={Images} />
			<Route path="/contents/images/responsive" component={Responsive} />
			<Route path="/contents/images/thumbnail" component={Thumbnail} />
			<Route path="/contents/tables" component={Tables} />
			<Route path="/contents/tables/striped" component={Striped} />
			<Route path="/contents/tables/dark-borderless" component={DarkBorderless} />
			<Route path="/contents/tables/hover-variants" component={HoverVariants} />
			<Route path="/contents/tables/hover-default-variant" component={HoverDefaultVariant} />
			<Route path="/contents/tables/hover-primary-variant" component={HoverPrimaryVariant} />
			<Route
				path="/contents/tables/hover-secondary-variant"
				component={HoverSecondaryVariant}
			/>
			<Route path="/contents/tables/hover-success-variant" component={HoverSuccessVariant} />
			<Route path="/contents/tables/hover-danger-variant" component={HoverDangerVariant} />
			<Route path="/contents/tables/hover-warning-variant" component={HoverWarningVariant} />
			<Route path="/contents/tables/hover-info-variant" component={HoverInfoVariant} />
			<Route path="/contents/tables/hover-light-variant" component={HoverLightVariant} />
			<Route path="/contents/tables/hover-dark-variant" component={HoverDarkVariant} />
			<Route path="/contents/tables/small-bordered" component={SmallBordered} />
			<Route path="/contents/typography" component={Typography} />
			<Route path="/contents/typography/blockquote" component={Blockquote} />
			<Route path="/contents/typography/display" component={Display} />
			<Route path="/contents/typography/heading" component={Heading} />
			<Route path="/contents/typography/inline-list" component={InlineList} />
			<Route path="/contents/typography/lead" component={Lead} />
			<Route path="/contents/typography/text-elements" component={TextElements} />
			<Route path="/contents/typography/unstyled-list" component={UnstyledList} />

			{/* Forms routes */}
			<Route path="/forms" component={FormsSection} />
			<Route path="/forms/overview" component={Overview} />
			<Route path="/forms/overview/basic-form" component={BasicForm} />
			<Route path="/forms/overview/checkbox" component={Checkbox} />
			<Route path="/forms/overview/radio-buttons" component={RadioButtons} />
			<Route path="/forms/overview/switch-checkbox" component={SwitchCheckbox} />
			<Route path="/forms/overview/file-input" component={FileInput} />
			<Route path="/forms/overview/range-input" component={RangeInput} />
			<Route path="/forms/sizing" component={Sizing} />
			<Route path="/forms/sizing/large-controls" component={LargeControls} />
			<Route path="/forms/sizing/small-controls" component={SmallControls} />
			<Route path="/forms/disabled" component={DisabledForms} />
			<Route path="/forms/disabled/disabled-fieldset" component={DisabledFieldset} />
			<Route path="/forms/disabled/disabled-checkbox" component={DisabledCheckbox} />
			<Route path="/forms/disabled/disabled-radio-buttons" component={DisabledRadioButtons} />
			<Route
				path="/forms/disabled/disabled-switch-checkbox"
				component={DisabledSwitchCheckbox}
			/>
			<Route path="/forms/disabled/disabled-file-range" component={DisabledFileRange} />
			<Route path="/forms/floating-labels" component={FloatingLabels} />
			<Route path="/forms/floating-labels/floating-labels-example" component={FloatingLabelsExample} />
			<Route path="/forms/input-group" component={InputGroup} />
			<Route path="/forms/input-group/prefix-addon" component={PrefixAddon} />
			<Route path="/forms/input-group/suffix-addon" component={SuffixAddon} />
			<Route path="/forms/input-group/url-addon" component={UrlAddon} />
			<Route path="/forms/input-group/currency-addon" component={CurrencyAddon} />
			<Route path="/forms/input-group/textarea-addon" component={TextareaAddon} />
			<Route path="/forms/validation" component={Validation} />
			<Route path="/forms/validation/valid-names" component={ValidNames} />
			<Route path="/forms/validation/invalid-username-city" component={InvalidUsernameCity} />
			<Route path="/forms/validation/invalid-state-zip" component={InvalidStateZip} />
			<Route path="/forms/validation/invalid-checkboxes" component={InvalidCheckboxes} />
			<Route path="/forms/validation/invalid-radios" component={InvalidRadios} />
			<Route path="/forms/validation/valid-checkboxes" component={ValidCheckboxes} />
			<Route path="/forms/validation/valid-radios" component={ValidRadios} />

			{/* UI routes */}
			<Route path="/ui" component={UiSection} />
			<Route path="/ui/accordion" component={Accordion} />
			<Route path="/ui/accordion/accordion-example" component={AccordionExample} />
			<Route path="/ui/alerts" component={Alerts} />
			<Route path="/ui/alerts/primary-alert" component={PrimaryAlert} />
			<Route path="/ui/alerts/secondary-alert" component={SecondaryAlert} />
			<Route path="/ui/alerts/success-alert" component={SuccessAlert} />
			<Route path="/ui/alerts/danger-alert" component={DangerAlert} />
			<Route path="/ui/alerts/warning-alert" component={WarningAlert} />
			<Route path="/ui/alerts/info-alert" component={InfoAlert} />
			<Route path="/ui/alerts/light-alert" component={LightAlert} />
			<Route path="/ui/alerts/dark-alert" component={DarkAlert} />
			<Route path="/ui/alerts/heading-alert" component={HeadingAlert} />
			<Route path="/ui/badge" component={Badge} />
			<Route path="/ui/badge/heading-badges" component={HeadingBadges} />
			<Route path="/ui/badge/pill-badges" component={PillBadges} />
			<Route path="/ui/breadcrumb" component={Breadcrumb} />
			<Route path="/ui/breadcrumb/breadcrumb-example" component={BreadcrumbExample} />
			<Route path="/ui/button-group" component={ButtonGroup} />
			<Route path="/ui/button-group/button-group-example" component={ButtonGroupExample} />
			<Route path="/ui/buttons" component={Buttons} />
			<Route path="/ui/buttons/solid-primary-button" component={SolidPrimaryButton} />
			<Route path="/ui/buttons/solid-secondary-button" component={SolidSecondaryButton} />
			<Route path="/ui/buttons/solid-success-button" component={SolidSuccessButton} />
			<Route path="/ui/buttons/solid-danger-button" component={SolidDangerButton} />
			<Route path="/ui/buttons/solid-warning-button" component={SolidWarningButton} />
			<Route path="/ui/buttons/solid-info-button" component={SolidInfoButton} />
			<Route path="/ui/buttons/solid-light-button" component={SolidLightButton} />
			<Route path="/ui/buttons/solid-dark-button" component={SolidDarkButton} />
			<Route path="/ui/buttons/solid-link-button" component={SolidLinkButton} />
			<Route path="/ui/buttons/outline-primary-button" component={OutlinePrimaryButton} />
			<Route
				path="/ui/buttons/outline-secondary-button"
				component={OutlineSecondaryButton}
			/>
			<Route path="/ui/buttons/outline-success-button" component={OutlineSuccessButton} />
			<Route path="/ui/buttons/outline-danger-button" component={OutlineDangerButton} />
			<Route path="/ui/buttons/outline-warning-button" component={OutlineWarningButton} />
			<Route path="/ui/buttons/outline-info-button" component={OutlineInfoButton} />
			<Route path="/ui/buttons/outline-light-button" component={OutlineLightButton} />
			<Route path="/ui/buttons/outline-dark-button" component={OutlineDarkButton} />
			<Route path="/ui/buttons/small-button" component={SmallButton} />
			<Route path="/ui/buttons/large-button" component={LargeButton} />
			<Route path="/ui/card" component={Card} />
			<Route path="/ui/card/cards-grid" component={CardsGrid} />
			<Route path="/ui/card/image-top-card" component={ImageTopCard} />
			<Route path="/ui/card/featured-card" component={FeaturedCard} />
			<Route path="/ui/card/list-card" component={ListCard} />
			<Route path="/ui/card/horizontal-card" component={HorizontalCard} />
			<Route path="/ui/card-tabs" component={CardTabs} />
			<Route path="/ui/card-tabs/card-tabs-example" component={CardTabsExample} />
			<Route path="/ui/carousel" component={Carousel} />
			<Route path="/ui/carousel/carousel-example" component={CarouselExample} />
			<Route path="/ui/dropdowns" component={Dropdowns} />
			<Route path="/ui/dropdowns/small-dropdown" component={SmallDropdown} />
			<Route path="/ui/dropdowns/normal-dropdown" component={NormalDropdown} />
			<Route path="/ui/dropdowns/large-dropdown" component={LargeDropdown} />
			<Route path="/ui/dropdowns/split-primary-dropdown" component={SplitPrimaryDropdown} />
			<Route
				path="/ui/dropdowns/split-secondary-dropdown"
				component={SplitSecondaryDropdown}
			/>
			<Route path="/ui/dropdowns/split-success-dropdown" component={SplitSuccessDropdown} />
			<Route path="/ui/dropdowns/split-info-dropdown" component={SplitInfoDropdown} />
			<Route path="/ui/dropdowns/split-warning-dropdown" component={SplitWarningDropdown} />
			<Route path="/ui/dropdowns/split-danger-dropdown" component={SplitDangerDropdown} />
			<Route path="/ui/dropdowns/split-light-dropdown" component={SplitLightDropdown} />
			<Route path="/ui/dropdowns/split-dark-dropdown" component={SplitDarkDropdown} />
			<Route path="/ui/dropdowns/end-dropdown" component={EndDropdown} />
			<Route path="/ui/dropdowns/up-dropdown" component={UpDropdown} />
			<Route path="/ui/dropdowns/start-dropdown" component={StartDropdown} />
			<Route path="/ui/dropdowns/aligned-dropdown" component={AlignedDropdown} />
			<Route path="/ui/list-group" component={ListGroup} />
			<Route path="/ui/list-group/default-list-group" component={DefaultListGroup} />
			<Route path="/ui/list-group/flush-list-group" component={FlushListGroup} />
			<Route path="/ui/list-group/contextual-list-group" component={ContextualListGroup} />
			<Route
				path="/ui/list-group/contextual-default-list-group"
				component={ContextualDefaultListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-primary-list-group"
				component={ContextualPrimaryListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-secondary-list-group"
				component={ContextualSecondaryListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-success-list-group"
				component={ContextualSuccessListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-danger-list-group"
				component={ContextualDangerListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-warning-list-group"
				component={ContextualWarningListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-info-list-group"
				component={ContextualInfoListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-light-list-group"
				component={ContextualLightListGroup}
			/>
			<Route
				path="/ui/list-group/contextual-dark-list-group"
				component={ContextualDarkListGroup}
			/>
			<Route path="/ui/modal" component={Modal} />
			<Route path="/ui/modal/default-modal" component={DefaultModal} />
			<Route path="/ui/modal/static-backdrop-modal" component={StaticBackdropModal} />
			<Route path="/ui/modal/centered-scrollable-modal" component={CenteredScrollableModal} />
			<Route path="/ui/modal/fullscreen-modal" component={FullscreenModal} />
			<Route path="/ui/navbar" component={Navbar} />
			<Route path="/ui/navbar/navbar-example" component={NavbarExample} />
			<Route path="/ui/navs" component={Navs} />
			<Route path="/ui/navs/basic-nav" component={BasicNav} />
			<Route path="/ui/navs/tabbed-nav" component={TabbedNav} />
			<Route path="/ui/navs/pill-nav" component={PillNav} />
			<Route path="/ui/pagination" component={Pagination} />
			<Route path="/ui/pagination/small-pagination" component={SmallPagination} />
			<Route path="/ui/pagination/standard-pagination" component={StandardPagination} />
			<Route path="/ui/pagination/large-pagination" component={LargePagination} />
			<Route path="/ui/popovers" component={Popovers} />
			<Route path="/ui/popovers/basic-popover" component={BasicPopover} />
			<Route path="/ui/popovers/top-popover" component={TopPopover} />
			<Route path="/ui/popovers/end-popover" component={EndPopover} />
			<Route path="/ui/popovers/bottom-popover" component={BottomPopover} />
			<Route path="/ui/popovers/start-popover" component={StartPopover} />
			<Route path="/ui/progress" component={Progress} />
			<Route path="/ui/progress/progress-0" component={Progress0} />
			<Route path="/ui/progress/progress-25" component={Progress25} />
			<Route path="/ui/progress/progress-50" component={Progress50} />
			<Route path="/ui/progress/progress-75" component={Progress75} />
			<Route path="/ui/progress/progress-100" component={Progress100} />
			<Route path="/ui/progress/striped-progress" component={StripedProgress} />
			<Route path="/ui/scrollspy" component={Scrollspy} />
			<Route path="/ui/scrollspy/scrollspy-example" component={ScrollspyExample} />
			<Route path="/ui/spinners" component={Spinners} />
			<Route path="/ui/spinners/border-primary-spinner" component={BorderPrimarySpinner} />
			<Route
				path="/ui/spinners/border-secondary-spinner"
				component={BorderSecondarySpinner}
			/>
			<Route path="/ui/spinners/border-success-spinner" component={BorderSuccessSpinner} />
			<Route path="/ui/spinners/border-danger-spinner" component={BorderDangerSpinner} />
			<Route path="/ui/spinners/border-warning-spinner" component={BorderWarningSpinner} />
			<Route path="/ui/spinners/border-info-spinner" component={BorderInfoSpinner} />
			<Route path="/ui/spinners/border-light-spinner" component={BorderLightSpinner} />
			<Route path="/ui/spinners/border-dark-spinner" component={BorderDarkSpinner} />
			<Route path="/ui/spinners/grow-primary-spinner" component={GrowPrimarySpinner} />
			<Route path="/ui/spinners/grow-secondary-spinner" component={GrowSecondarySpinner} />
			<Route path="/ui/spinners/grow-success-spinner" component={GrowSuccessSpinner} />
			<Route path="/ui/spinners/grow-danger-spinner" component={GrowDangerSpinner} />
			<Route path="/ui/spinners/grow-warning-spinner" component={GrowWarningSpinner} />
			<Route path="/ui/spinners/grow-info-spinner" component={GrowInfoSpinner} />
			<Route path="/ui/spinners/grow-light-spinner" component={GrowLightSpinner} />
			<Route path="/ui/spinners/grow-dark-spinner" component={GrowDarkSpinner} />
			<Route path="/ui/toasts" component={Toasts} />
			<Route path="/ui/toasts/toast-example" component={ToastExample} />
			<Route path="/ui/tooltips" component={Tooltips} />
			<Route path="/ui/tooltips/top-tooltip" component={TopTooltip} />
			<Route path="/ui/tooltips/end-tooltip" component={EndTooltip} />
			<Route path="/ui/tooltips/bottom-tooltip" component={BottomTooltip} />
			<Route path="/ui/tooltips/start-tooltip" component={StartTooltip} />
			<Route path="/ui/tooltips/html-tooltip" component={HtmlTooltip} />
		</Router>
	),
	document.getElementById('root') ??
		(() => {
			throw new Error('Root element not found')
		})(),
)
