import { CSSProperties, FC } from 'react';
import { useGlobalContext } from '../../hooks';
import { SiteLayoutFooter } from './SiteLayoutFooter';
import { SiteLayoutHeader } from './SiteLayoutHeader';

export const SiteLayout: FC = ({ children }) => {
  const { backgroundValue: backgroundColor, textValue } = useGlobalContext();

  return (
    <div
      style={{ backgroundColor, '--global-text': textValue } as CSSProperties}
      className="min-h-screen"
    >
      <SiteLayoutHeader />
      <main className="py-8">{children}</main>
      <SiteLayoutFooter />
    </div>
  );
};
