import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';

const Dropdowns: Component = () => (
  <article class="my-3" id="dropdowns">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Dropdowns</h3>
                <DocLink href="/ui/dropdowns" />
              </div>

              <div>
                <div class="bd-example">
                  <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-lg dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonLG"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonLG"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary">
                      Primary
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary">
                      Secondary
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-success">
                      Success
                    </button>
                    <button
                      type="button"
                      class="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-info">
                      Info
                    </button>
                    <button
                      type="button"
                      class="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-warning">
                      Warning
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-danger">
                      Danger
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                    <div class="dropend">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropendMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropend button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropendMenuButton"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropup">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropupMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropup button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropupMenuButton"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropstart">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropstartMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropstart button
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropstartMenuButton"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="btn-group">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownRightMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        End-aligned menu
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownRightMenuButton"
                      >
                        <li>
                          <h6 class="dropdown-header">Dropdown header</h6>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            Separated link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
);

export default Dropdowns;
