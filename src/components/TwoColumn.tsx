import clsx from 'clsx';
import { HTMLAttributes, VFC } from 'react';
import { ReactChildrenType } from '../types';

const TwoColumn: VFC<
  {
    firstColumn: ReactChildrenType;
    secondColumn: ReactChildrenType;
  } & HTMLAttributes<HTMLDivElement>
> = ({ firstColumn, secondColumn, className, ...rest }) => (
  <div
    className={clsx('grid grid-cols-1 md:grid-cols-2 gap-5', className)}
    {...rest}
  >
    <div>{firstColumn}</div>
    <div>{secondColumn}</div>
  </div>
);

export default TwoColumn;
