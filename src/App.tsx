import { onSettled } from 'solid-js';
import type { Component } from 'solid-js';
import ThemeDropdown from './components/ThemeDropdown';
import ContentsSection from './components/contents/ContentsSection';
import FormsSection from './components/forms/FormsSection';
import UiSection from './components/ui/UiSection';
import ModalDialogs from './components/ui/ModalDialogs';

const App: Component = () => {
  /**
   * This function was taken from the cheatsheet example of bootstrap.
   * You will most likely remove it if using this template.
   */
  function setActiveItem() {
    let hash = window.location.hash;

    if (hash === '') {
      return;
    }

    let link = document.querySelector('.bd-aside a[href="' + hash + '"]');
    let active = document.querySelector('.bd-aside .active');
    // @ts-ignore
    let parent = link?.parentNode?.parentNode?.previousElementSibling;

    link?.classList.add('active');

    if (parent?.classList.contains('collapsed')) {
      parent.click();
    }

    if (!active) {
      return;
    }

    // @ts-ignore
    let expanded = active.parentNode.parentNode.previousElementSibling;

    active.classList.remove('active');

    if (expanded && parent !== expanded) {
      expanded.click();
    }
  }

  onSettled(() => {
    setActiveItem();
    window.addEventListener('hashchange', setActiveItem);
    return () => {
      window.removeEventListener('hashchange', setActiveItem);
    };
  });

  return (
    <>
      <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="d-flex align-items-center fs-4 text-white mb-0">
            Bootstrap Cheatsheet
          </h1>
        </div>
      </header>
      <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <article class="my-3" id="bsthemesdrop">
          <ThemeDropdown />
        </article>
        <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav class="small" id="toc">
          <ul class="list-unstyled">
            <li class="my-2">
              <button
                class="btn d-inline-flex align-items-center collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul class="list-unstyled ps-3 collapse" id="contents-collapse">
                <li><a class="d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
              </ul>
            </li>
            <li class="my-2">
              <button
                class="btn d-inline-flex align-items-center collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#forms-collapse"
                aria-controls="forms-collapse"
              >
                Forms
              </button>
              <ul class="list-unstyled ps-3 collapse" id="forms-collapse">
                <li><a class="d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled forms</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#sizing">Sizing</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#input-group">Input group</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#floating-labels">Floating labels</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#validation">Validation</a></li>
              </ul>
            </li>
            <li class="my-2">
              <button
                class="btn d-inline-flex align-items-center collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#ui-collapse"
                aria-controls="ui-collapse"
              >
                UI
              </button>
              <ul class="list-unstyled ps-3 collapse" id="ui-collapse">
                <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Accordion</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Alerts</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#badge">Badge</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#buttons">Buttons</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#button-group">Button group</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#card">Card</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#carousel">Carousel</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#list-group">List group</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#modal">Modal</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#navs">Navs</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#navbar">Navbar</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#pagination">Pagination</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#popovers">Popovers</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#progress">Progress</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#spinners">Spinners</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#toasts">Toasts</a></li>
                <li><a class="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div class="bd-cheatsheet container-fluid REM_bg-body">
        <ContentsSection />
        <FormsSection />
        <UiSection />
      </div>
      <ModalDialogs />
    </>
  );
};

export default App;
