/* @refresh reload */
import { render } from "@solidjs/web";
import { Router, Route } from "@solidjs/router";
import './cheatsheet.scss';
// import 'bootstrap/scss/bootstrap.scss';

import Home from "./components/HomePage";

// Contents components
import ContentsSection from "./components/contents/ContentsSection";
import Figures from "./components/contents/Figures";
import Images from "./components/contents/Images";
import Tables from "./components/contents/Tables";
import Typography from "./components/contents/Typography";
import Blockquote from "./components/contents/typography/Blockquote";
import Display from "./components/contents/typography/Display";
import Heading from "./components/contents/typography/Heading";
import InlineList from "./components/contents/typography/InlineList";
import Lead from "./components/contents/typography/Lead";
import TextElements from "./components/contents/typography/TextElements";
import UnstyledList from "./components/contents/typography/UnstyledList";

// Forms components
import DisabledForms from "./components/forms/DisabledForms";
import FloatingLabels from "./components/forms/FloatingLabels";
import FormsSection from "./components/forms/FormsSection";
import InputGroup from "./components/forms/InputGroup";
import Overview from "./components/forms/Overview";
import Sizing from "./components/forms/Sizing";
import Validation from "./components/forms/Validation";

// UI components
import Accordion from "./components/ui/Accordion";
import Alerts from "./components/ui/Alerts";
import Badge from "./components/ui/Badge";
import Breadcrumb from "./components/ui/Breadcrumb";
import ButtonGroup from "./components/ui/ButtonGroup";
import Buttons from "./components/ui/Buttons";
import Card from "./components/ui/Card";
import CardTabs from "./components/ui/CardTabs";
import Carousel from "./components/ui/Carousel";
import Dropdowns from "./components/ui/Dropdowns";
import ListGroup from "./components/ui/ListGroup";
import Modal from "./components/ui/Modal";
import ModalDialogs from "./components/ui/ModalDialogs";
import Navbar from "./components/ui/Navbar";
import Navs from "./components/ui/Navs";
import Pagination from "./components/ui/Pagination";
import Popovers from "./components/ui/Popovers";
import Progress from "./components/ui/Progress";
import Scrollspy from "./components/ui/Scrollspy";
import Spinners from "./components/ui/Spinners";
import Toasts from "./components/ui/Toasts";
import Tooltips from "./components/ui/Tooltips";
import UiSection from "./components/ui/UiSection";

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      
      {/* Contents routes */}
      <Route path="/contents" component={ContentsSection} />
      <Route path="/contents/figures" component={Figures} />
      <Route path="/contents/images" component={Images} />
      <Route path="/contents/tables" component={Tables} />
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
      <Route path="/forms/disabled" component={DisabledForms} />
      <Route path="/forms/floating-labels" component={FloatingLabels} />
      <Route path="/forms/input-group" component={InputGroup} />
      <Route path="/forms/validation" component={Validation} />
      
      {/* UI routes */}
      <Route path="/ui" component={UiSection} />
      <Route path="/ui/accordion" component={Accordion} />
      <Route path="/ui/alerts" component={Alerts} />
      <Route path="/ui/badge" component={Badge} />
      <Route path="/ui/breadcrumb" component={Breadcrumb} />
      <Route path="/ui/button-group" component={ButtonGroup} />
      <Route path="/ui/buttons" component={Buttons} />
      <Route path="/ui/card" component={Card} />
      <Route path="/ui/card-tabs" component={CardTabs} />
      <Route path="/ui/carousel" component={Carousel} />
      <Route path="/ui/dropdowns" component={Dropdowns} />
      <Route path="/ui/list-group" component={ListGroup} />
      <Route path="/ui/modal" component={Modal} />
      <Route path="/ui/modal-dialogs" component={ModalDialogs} />
      <Route path="/ui/navbar" component={Navbar} />
      <Route path="/ui/navs" component={Navs} />
      <Route path="/ui/pagination" component={Pagination} />
      <Route path="/ui/popovers" component={Popovers} />
      <Route path="/ui/progress" component={Progress} />
      <Route path="/ui/scrollspy" component={Scrollspy} />
      <Route path="/ui/spinners" component={Spinners} />
      <Route path="/ui/toasts" component={Toasts} />
      <Route path="/ui/tooltips" component={Tooltips} />
    </Router>
  ),
  document.getElementById("root")!
);
