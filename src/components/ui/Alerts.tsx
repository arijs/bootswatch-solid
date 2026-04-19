import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';

const Alerts: Component = () => (
  <article class="my-3" id="alerts">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Alerts</h3>
                <DocLink href="/ui/alerts" />
              </div>

              <div>
                <div class="bd-example">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple primary alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-secondary alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple secondary alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple success alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-danger alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple danger alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-warning alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple warning alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-info alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple info alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-light alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple light alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div
                    class="alert alert-dark alert-dismissible fade show"
                    aria-role="alert"
                  >
                    A simple dark alert with{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      class="alert-link"
                    >
                      an example link
                    </a>
                    . Give it a click if you like.
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="alert alert-success" aria-role="alert">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>
                      Aww yeah, you successfully read this important alert
                      message. This example text is going to run a bit longer so
                      that you can see how spacing within an alert works with this
                      kind of content.
                    </p>
                    <hr />
                    <p class="mb-0">
                      Whenever you need to, be sure to use margin utilities to
                      keep things nice and tidy.
                    </p>
                  </div>
                </div>
              </div>
            </article>
);

export default Alerts;
