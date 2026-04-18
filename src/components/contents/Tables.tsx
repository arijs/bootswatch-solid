import type { Component } from 'solid-js';

const Tables: Component = () => (
  <article class="my-3" id="tables">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Tables</h3>
                <a class="d-flex align-items-center" href="../content/tables/">
                  Documentation
                </a>
              </div>

              <div>
                <div class="bd-example">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="bd-example">
                  <table class="table table-dark table-borderless">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="bd-example">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Class</th>
                        <th>Heading</th>
                        <th>Heading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Default</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>

                      <tr class="table-primary">
                        <th>Primary</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-secondary">
                        <th>Secondary</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-success">
                        <th>Success</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-danger">
                        <th>Danger</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-warning">
                        <th>Warning</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-info">
                        <th>Info</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-light">
                        <th>Light</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                      <tr class="table-dark">
                        <th>Dark</th>
                        <td>Cell</td>
                        <td>Cell</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="bd-example">
                  <table class="table table-sm table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th>3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
);

export default Tables;
