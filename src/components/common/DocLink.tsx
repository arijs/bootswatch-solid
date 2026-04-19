import type { Component } from 'solid-js';

const DocLink: Component<{ href: string }> = (props) => (
  <a class="d-flex align-items-center" href={props.href}>
    Documentation
  </a>
);

export default DocLink;
