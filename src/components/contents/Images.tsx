import type { Component } from 'solid-js';
import DocLink from '../common/DocLink';

const Images: Component = () => (
  <article class="my-3" id="images">
              <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                <h3>Images</h3>
                <DocLink href="/contents/images" />
              </div>

              <div>
                <div class="bd-example">
                  <svg
                    class="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                    width="100%"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-role="img"
                    aria-label="Placeholder: Responsive image"
                    preserveAspectRatio="xMidYMid slice"
                    tabindex="0"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96" />
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      Responsive image
                    </text>
                  </svg>
                </div>

                <div class="bd-example">
                  <svg
                    class="bd-placeholder-img img-thumbnail"
                    width="200"
                    height="200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-role="img"
                    aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
                    preserveAspectRatio="xMidYMid slice"
                    tabindex="0"
                  >
                    <title>
                      A generic square placeholder image with a white border
                      around it, making it resemble a photograph taken with an old
                      instant camera
                    </title>
                    <rect width="100%" height="100%" fill="#868e96" />
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      200x200
                    </text>
                  </svg>
                </div>
              </div>
            </article>
);

export default Images;
