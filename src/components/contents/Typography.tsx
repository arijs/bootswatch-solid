import type { Component } from 'solid-js';
import Display from './typography/Display';
import Heading from './typography/Heading';
import Lead from './typography/Lead';
import TextElements from './typography/TextElements';
import Blockquote from './typography/Blockquote';
import UnstyledList from './typography/UnstyledList';
import InlineList from './typography/InlineList';

const Typography: Component = () => (
  <article class="my-3" id="typography">
    <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
      <h3>Typography</h3>
      <a class="d-flex align-items-center" href="../content/typography/">
        Documentation
      </a>
    </div>

    <div>
      <Display />
      <Heading />
      <Lead />
      <TextElements />
      <Blockquote />
      <UnstyledList />
      <InlineList />
    </div>
  </article>
);

export default Typography;
