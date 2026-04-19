/* @refresh reload */

import { Route, Router } from '@solidjs/router'
import { render } from '@solidjs/web'
import './cheatsheet.scss'

// import 'bootstrap/scss/bootstrap.scss';

// Contents components
import ContentsSection from './components/contents/ContentsSection'
import Figures from './components/contents/Figures'
import Images from './components/contents/Images'
import Responsive from './components/contents/images/Responsive'
import Thumbnail from './components/contents/images/Thumbnail'
import Tables from './components/contents/Tables'
import Typography from './components/contents/Typography'
import DarkBorderless from './components/contents/tables/DarkBorderless'
import HoverVariants from './components/contents/tables/HoverVariants'
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
import FloatingLabels from './components/forms/FloatingLabels'
import FormsSection from './components/forms/FormsSection'
import InputGroup from './components/forms/InputGroup'
import Overview from './components/forms/Overview'
import Sizing from './components/forms/Sizing'
import LargeControls from './components/forms/sizing/LargeControls'
import SmallControls from './components/forms/sizing/SmallControls'
import Validation from './components/forms/Validation'
import Home from './components/HomePage'

// UI components
import Accordion from './components/ui/Accordion'
import Alerts from './components/ui/Alerts'
import DismissibleAlerts from './components/ui/alerts/DismissibleAlerts'
import HeadingAlert from './components/ui/alerts/HeadingAlert'
import Badge from './components/ui/Badge'
import Breadcrumb from './components/ui/Breadcrumb'
import ButtonGroup from './components/ui/ButtonGroup'
import Buttons from './components/ui/Buttons'
import HeadingBadges from './components/ui/badge/HeadingBadges'
import PillBadges from './components/ui/badge/PillBadges'
import ButtonSizes from './components/ui/buttons/ButtonSizes'
import OutlineButtons from './components/ui/buttons/OutlineButtons'
import SolidButtons from './components/ui/buttons/SolidButtons'
import Card from './components/ui/Card'
import FeaturedCard from './components/ui/card/FeaturedCard'
import HorizontalCard from './components/ui/card/HorizontalCard'
import ImageTopCard from './components/ui/card/ImageTopCard'
import ListCard from './components/ui/card/ListCard'
import CardTabs from './components/ui/CardTabs'
import Carousel from './components/ui/Carousel'
import Dropdowns from './components/ui/Dropdowns'
import AlignedDropdown from './components/ui/dropdowns/AlignedDropdown'
import DirectionalDropdowns from './components/ui/dropdowns/DirectionalDropdowns'
import SizesDropdowns from './components/ui/dropdowns/SizesDropdowns'
import SplitDropdowns from './components/ui/dropdowns/SplitDropdowns'
import ListGroup from './components/ui/ListGroup'
import ContextualListGroup from './components/ui/list-group/ContextualListGroup'
import DefaultListGroup from './components/ui/list-group/DefaultListGroup'
import FlushListGroup from './components/ui/list-group/FlushListGroup'
import Modal from './components/ui/Modal'
import ModalDialogs from './components/ui/ModalDialogs'
import Navbar from './components/ui/Navbar'
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
import PositionedPopovers from './components/ui/popovers/PositionedPopovers'
import BasicProgress from './components/ui/progress/BasicProgress'
import StripedProgress from './components/ui/progress/StripedProgress'
import Scrollspy from './components/ui/Scrollspy'
import Spinners from './components/ui/Spinners'
import BorderSpinners from './components/ui/spinners/BorderSpinners'
import GrowSpinners from './components/ui/spinners/GrowSpinners'
import Toasts from './components/ui/Toasts'
import Tooltips from './components/ui/Tooltips'
import UiSection from './components/ui/UiSection'

render(
	() => (
		<Router>
			<Route path="/" component={Home} />

			{/* Contents routes */}
			<Route path="/contents" component={ContentsSection} />
			<Route path="/contents/figures" component={Figures} />
			<Route path="/contents/images" component={Images} />
			<Route path="/contents/images/responsive" component={Responsive} />
			<Route path="/contents/images/thumbnail" component={Thumbnail} />
			<Route path="/contents/tables" component={Tables} />
			<Route path="/contents/tables/striped" component={Striped} />
			<Route path="/contents/tables/dark-borderless" component={DarkBorderless} />
			<Route path="/contents/tables/hover-variants" component={HoverVariants} />
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
			<Route path="/forms/sizing" component={Sizing} />
			<Route path="/forms/sizing/large-controls" component={LargeControls} />
			<Route path="/forms/sizing/small-controls" component={SmallControls} />
			<Route path="/forms/disabled" component={DisabledForms} />
			<Route path="/forms/floating-labels" component={FloatingLabels} />
			<Route path="/forms/input-group" component={InputGroup} />
			<Route path="/forms/validation" component={Validation} />

			{/* UI routes */}
			<Route path="/ui" component={UiSection} />
			<Route path="/ui/accordion" component={Accordion} />
			<Route path="/ui/alerts" component={Alerts} />
			<Route path="/ui/alerts/dismissible-alerts" component={DismissibleAlerts} />
			<Route path="/ui/alerts/heading-alert" component={HeadingAlert} />
			<Route path="/ui/badge" component={Badge} />
			<Route path="/ui/badge/heading-badges" component={HeadingBadges} />
			<Route path="/ui/badge/pill-badges" component={PillBadges} />
			<Route path="/ui/breadcrumb" component={Breadcrumb} />
			<Route path="/ui/button-group" component={ButtonGroup} />
			<Route path="/ui/buttons" component={Buttons} />
			<Route path="/ui/buttons/solid-buttons" component={SolidButtons} />
			<Route path="/ui/buttons/outline-buttons" component={OutlineButtons} />
			<Route path="/ui/buttons/button-sizes" component={ButtonSizes} />
			<Route path="/ui/card" component={Card} />
			<Route path="/ui/card/image-top-card" component={ImageTopCard} />
			<Route path="/ui/card/featured-card" component={FeaturedCard} />
			<Route path="/ui/card/list-card" component={ListCard} />
			<Route path="/ui/card/horizontal-card" component={HorizontalCard} />
			<Route path="/ui/card-tabs" component={CardTabs} />
			<Route path="/ui/carousel" component={Carousel} />
			<Route path="/ui/dropdowns" component={Dropdowns} />
			<Route path="/ui/dropdowns/sizes-dropdowns" component={SizesDropdowns} />
			<Route path="/ui/dropdowns/split-dropdowns" component={SplitDropdowns} />
			<Route path="/ui/dropdowns/directional-dropdowns" component={DirectionalDropdowns} />
			<Route path="/ui/dropdowns/aligned-dropdown" component={AlignedDropdown} />
			<Route path="/ui/list-group" component={ListGroup} />
			<Route path="/ui/list-group/default-list-group" component={DefaultListGroup} />
			<Route path="/ui/list-group/flush-list-group" component={FlushListGroup} />
			<Route path="/ui/list-group/contextual-list-group" component={ContextualListGroup} />
			<Route path="/ui/modal" component={Modal} />
			<Route path="/ui/modal-dialogs" component={ModalDialogs} />
			<Route path="/ui/navbar" component={Navbar} />
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
			<Route path="/ui/popovers/positioned-popovers" component={PositionedPopovers} />
			<Route path="/ui/progress" component={Progress} />
			<Route path="/ui/progress/basic-progress" component={BasicProgress} />
			<Route path="/ui/progress/striped-progress" component={StripedProgress} />
			<Route path="/ui/scrollspy" component={Scrollspy} />
			<Route path="/ui/spinners" component={Spinners} />
			<Route path="/ui/spinners/border-spinners" component={BorderSpinners} />
			<Route path="/ui/spinners/grow-spinners" component={GrowSpinners} />
			<Route path="/ui/toasts" component={Toasts} />
			<Route path="/ui/tooltips" component={Tooltips} />
		</Router>
	),
	document.getElementById('root') ??
		(() => {
			throw new Error('Root element not found')
		})(),
)
