// import { onCleanup, onMount } from 'solid-js';
// import ThemeList from './components/ThemeList';
import TipoLocalListing from './components/db-tables/tipo-local/Listing';
// import * as bootstrap from 'bootstrap';
// import ThemeDropdown from './components/ThemeDropdown';
import Header from './components/common/Header';
import type { Component } from 'solid-js';

import './App.scss';

const App: Component = () => {

  return (
    <>
      <Header />
      <main class="container-fluid">
        <TipoLocalListing />
      </main>
    </>
  );
};

export default App;
