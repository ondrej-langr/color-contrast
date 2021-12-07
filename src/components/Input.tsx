import clsx from 'clsx';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  VFC,
  cloneElement,
  ReactElement,
} from 'react';

const Input: VFC<
  { name: string; prefixIcon?: ReactElement } & HTMLAttributes<HTMLDivElement> &
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'onInput' | 'value'
    >
> = ({ name, prefixIcon, className, onChange, onInput, value, ...rest }) => {
  return (
    <div className={clsx('relative', className)} {...rest}>
      {prefixIcon &&
        cloneElement(prefixIcon, {
          ...prefixIcon.props,
          className: clsx(
            prefixIcon.props?.className,
            'w-12 absolute left-0 top-4'
          ),
        })}{' '}
      <input
        className={clsx(
          'py-2 text-5xl font-bold focus:outline-none bg-transparent px-0 w-full',
          prefixIcon ? 'pl-14' : ''
        )}
        value={value}
        name={name}
        prefix={'#'}
        onChange={onChange}
        onInput={onInput}
      />
    </div>
  );
};

export default Input;
