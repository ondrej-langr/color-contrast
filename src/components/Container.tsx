import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx('container mx-auto', className)} {...rest}>
    {children}
  </div>
);

export default Container;
