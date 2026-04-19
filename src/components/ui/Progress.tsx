import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';

const Progress: Component = () => (
  <article class="my-3" id="progress">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Progress</h3>
                <DocLink href="/ui/progress" />
              </div>

              <div>
                <div class="bd-example">
                  <div class="progress mb-3">
                    <div class="progress-bar" aria-role="progressbar">
                      0%
                    </div>
                  </div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar bg-success w-25"
                      aria-role="progressbar"
                    >
                      25%
                    </div>
                  </div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar bg-info text-dark w-50"
                      aria-role="progressbar"
                    >
                      50%
                    </div>
                  </div>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar bg-warning text-dark w-75"
                      aria-role="progressbar"
                    >
                      75%
                    </div>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-danger w-100"
                      aria-role="progressbar"
                    >
                      100%
                    </div>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-role="progressbar"
                      style="width: 15%"
                    ></div>
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      aria-role="progressbar"
                      style="width: 40%"
                    ></div>
                  </div>
                </div>
              </div>
            </article>
);

export default Progress;
