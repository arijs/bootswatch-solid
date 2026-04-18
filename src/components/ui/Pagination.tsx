import type { Component } from 'solid-js';

const Pagination: Component = () => (
  <article class="my-3" id="pagination">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Pagination</h3>
                <a
                  class="d-flex align-items-center"
                  href="../components/pagination/"
                >
                  Documentation
                </a>
              </div>

              <div>
                <div class="bd-example">
                  <nav aria-label="Pagination example">
                    <ul class="pagination pagination-sm">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="bd-example">
                  <nav aria-label="Standard pagination example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="bd-example">
                  <nav aria-label="Another pagination example">
                    <ul class="pagination pagination-lg flex-wrap">
                      <li class="page-item disabled">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Previous
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </article>
);

export default Pagination;
