import { VFC } from 'react';

export const SiteLayoutFooter: VFC = () => (
  <footer>
    <div className="container mx-auto">
      <a href="https://github.com/ondrej-langr/color-contrast/issues/new">
        Report bugs
      </a>
      {' | '}
      <a href="https://github.com/ondrej-langr/color-contrast">Github</a>
      {' | '}
      <a href="/">Color contrast checker @ {new Date().getFullYear()}</a>
    </div>
  </footer>
);
