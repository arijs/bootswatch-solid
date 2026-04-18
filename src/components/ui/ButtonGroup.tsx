import type { Component } from 'solid-js';

const ButtonGroup: Component = () => (
  <article class="my-3" id="button-group">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Button group</h3>
                <a
                  class="d-flex align-items-center"
                  href="../components/button-group/"
                >
                  Documentation
                </a>
              </div>

              <div>
                <div class="bd-example">
                  <div
                    class="btn-toolbar"
                    aria-role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      class="btn-group me-2"
                      aria-role="group"
                      aria-label="First group"
                    >
                      <button type="button" class="btn btn-secondary">
                        1
                      </button>
                      <button type="button" class="btn btn-secondary">
                        2
                      </button>
                      <button type="button" class="btn btn-secondary">
                        3
                      </button>
                      <button type="button" class="btn btn-secondary">
                        4
                      </button>
                    </div>
                    <div
                      class="btn-group me-2"
                      aria-role="group"
                      aria-label="Second group"
                    >
                      <button type="button" class="btn btn-secondary">
                        5
                      </button>
                      <button type="button" class="btn btn-secondary">
                        6
                      </button>
                      <button type="button" class="btn btn-secondary">
                        7
                      </button>
                    </div>
                    <div
                      class="btn-group"
                      aria-role="group"
                      aria-label="Third group"
                    >
                      <button type="button" class="btn btn-secondary">
                        8
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
);

export default ButtonGroup;
