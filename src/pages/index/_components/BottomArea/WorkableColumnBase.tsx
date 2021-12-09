import Input from '@/components/Input';
import { PencilIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { FormEventHandler, VFC } from 'react';
import { HexColorPicker } from 'react-colorful';

export const WorkableColumnBase: VFC<{
  onInput: FormEventHandler<HTMLInputElement>;
  onPickerChange: Parameters<typeof HexColorPicker>['0']['onChange'];
  pickerValue: string;
  inputValue: string;
  name: string;
  label: string;
  childrenPosition?: 'left' | 'right';
}> = ({
  onInput,
  pickerValue,
  inputValue,
  name,
  label,
  onPickerChange,
  childrenPosition = 'left',
}) => (
  <section
    className={clsx(
      'text-dynamic-color',
      childrenPosition == 'right' && 'md:text-right'
    )}
  >
    <div className="py-2 relative">
      <Input
        name={name}
        id={name}
        value={inputValue}
        onInput={onInput}
        inputClassName={childrenPosition == 'right' ? 'md:text-right' : ''}
      />
      <hr
        className={clsx(
          'w-28 h-2 rounded-lg bg-current border-0 -mt-2',
          childrenPosition == 'right' && 'md:ml-auto'
        )}
      />
      <label
        htmlFor={name}
        className="text-2xl font-bold opacity-70 mt-3 block cursor-pointer"
        title="Edit this color"
      >
        <PencilIcon className="w-7 mr-1 inline-block" /> {label}
      </label>
    </div>
    <HexColorPicker
      color={pickerValue}
      onChange={onPickerChange}
      title="Pick a color with a color picker"
      className={clsx(
        'flex-none shadow-lg mt-7 max-w-md !h-[448px] !w-full',
        childrenPosition == 'right' && 'md:ml-auto'
      )}
    />
  </section>
);
