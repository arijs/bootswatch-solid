import type { Component } from 'solid-js';
import * as bootstrap from 'bootstrap';

const Popovers: Component = () => (
  <article class="my-3" id="popovers">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Popovers</h3>
                <a
                  class="d-flex align-items-center"
                  href="../components/popovers/"
                >
                  Documentation
                </a>
              </div>

              <div>
                <div class="bd-example">
                  <button
                    type="button"
                    class="btn btn-lg btn-danger"
                    data-bs-toggle="popover"
                    ref={(popover) => new bootstrap.Popover(popover)}
                    title="Popover title"
                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                  >
                    Click to toggle popover
                  </button>
                </div>

                <div class="bd-example">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    ref={(popover) => new bootstrap.Popover(popover)}
                    data-bs-placement="top"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on top
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    ref={(popover) => new bootstrap.Popover(popover)}
                    data-bs-placement="right"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on end
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    ref={(popover) => new bootstrap.Popover(popover)}
                    data-bs-placement="bottom"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on bottom
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    ref={(popover) => new bootstrap.Popover(popover)}
                    data-bs-placement="left"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  >
                    Popover on start
                  </button>
                </div>
              </div>
            </article>
);

export default Popovers;
