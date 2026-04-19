import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';

const Spinners: Component = () => (
  <article class="my-3" id="spinners">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Spinners</h3>
                <DocLink href="/ui/spinners" />
              </div>

              <div>
                <div class="bd-example">
                  <div class="spinner-border text-primary" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-secondary" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-success" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-danger" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-warning" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-info" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-light" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-border text-dark" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>

                <div class="bd-example">
                  <div class="spinner-grow text-primary" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-secondary" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-success" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-danger" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-warning" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-info" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-light" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div class="spinner-grow text-dark" aria-role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </article>
);

export default Spinners;
