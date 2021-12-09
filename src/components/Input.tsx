import clsx from 'clsx';
import {
  HTMLAttributes,
  InputHTMLAttributes,
  VFC,
  cloneElement,
  ReactElement,
} from 'react';

const Input: VFC<
  {
    name: string;
    prefixIcon?: ReactElement;
    inputClassName?: string;
  } & HTMLAttributes<HTMLDivElement> &
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'onInput' | 'value' | 'onFocus' | 'onBlur'
    >
> = ({
  name,
  prefixIcon,
  className,
  onChange,
  onInput,
  onFocus,
  onBlur,
  value,
  inputClassName,
  id,
  ...rest
}) => {
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
          'py-2 text-7xl font-bold focus:outline-none bg-transparent px-0 w-full',
          prefixIcon ? 'pl-14' : '',
          inputClassName
        )}
        value={value}
        name={name}
        prefix={'#'}
        onChange={onChange}
        onInput={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
        id={id}
      />
    </div>
  );
};

export default Input;
