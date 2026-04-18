import type { Component } from 'solid-js';

const Breadcrumb: Component = () => (
  <article class="my-3" id="breadcrumb">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Breadcrumb</h3>
                <a
                  class="d-flex align-items-center"
                  href="../components/breadcrumb/"
                >
                  Documentation
                </a>
              </div>

              <div>
                <div class="bd-example">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Home
                        </a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          Library
                        </a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Data
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </article>
);

export default Breadcrumb;
