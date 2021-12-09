import { VFC } from 'react';
import config from '../../config';

export const SiteLayoutHeader: VFC = () => (
  <header className="py-5 flex-none">
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl text-dynamic-color">
        {config.appName}
      </h1>
    </div>
  </header>
);
