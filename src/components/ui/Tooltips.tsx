import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';
import * as bootstrap from 'bootstrap';

const Tooltips: Component = () => (
  <article class="mt-3 mb-5 pb-5" id="tooltips">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Tooltips</h3>
                <DocLink href="/ui/tooltips" />
              </div>

              <div>
                <div
                  class="bd-example tooltip-demo"
                  ref={(tooltip) =>
                    new bootstrap.Tooltip(tooltip, {
                      selector: '[data-bs-toggle="tooltip"]',
                    })
                  }
                >
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Tooltip on top
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Tooltip on end"
                  >
                    Tooltip on end
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Tooltip on bottom"
                  >
                    Tooltip on bottom
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Tooltip on start"
                  >
                    Tooltip on start
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                  >
                    Tooltip with HTML
                  </button>
                </div>
              </div>
            </article>
);

export default Tooltips;
