import TwoColumn from '@/components/TwoColumn';
import { IGlobalContextValues } from '@/contexts/globalContext';
import { useGlobalContext } from '@/hooks';
import { VFC } from 'react';
import isHexColor from 'validator/lib/isHexColor';
import { WorkableColumnBase } from './WorkableColumnBase';

export const BottomArea: VFC = () => {
  const {
    backgroundValue,
    textValue,
    inputBackgroundValue,
    inputTextValue,
    updateValues,
  } = useGlobalContext();

  const setColor =
    (name: keyof Pick<IGlobalContextValues, 'backgroundValue' | 'textValue'>) =>
    (value: string) => {
      updateValues([
        { name, value },
        {
          name:
            name == 'backgroundValue'
              ? 'inputBackgroundValue'
              : 'inputTextValue',
          value,
        },
      ]);
    };

  const onInputCallback =
    (
      name: keyof Pick<
        IGlobalContextValues,
        'inputBackgroundValue' | 'inputTextValue'
      >
    ) =>
    (e: any) => {
      const value = e.target.value;
      const isValidHexColor = isHexColor(value);
      const compareValue =
        name == 'inputBackgroundValue' ? backgroundValue : textValue;

      updateValues([
        { name, value },
        ...(isValidHexColor && value !== compareValue
          ? [
              {
                name: (name == 'inputBackgroundValue'
                  ? 'backgroundValue'
                  : 'textValue') as keyof IGlobalContextValues,
                value,
              },
            ]
          : []),
      ]);
    };

  return (
    <TwoColumn
      className="container mx-auto mt-10"
      firstColumn={
        <WorkableColumnBase
          onPickerChange={setColor('backgroundValue')}
          name="inputBackgroundValue"
          label={'Background color'}
          pickerValue={backgroundValue}
          inputValue={inputBackgroundValue}
          onInput={onInputCallback('inputBackgroundValue')}
        />
      }
      secondColumn={
        <WorkableColumnBase
          onPickerChange={setColor('textValue')}
          name="inputTextValue"
          label={'Text color'}
          pickerValue={textValue}
          inputValue={inputTextValue}
          onInput={onInputCallback('inputTextValue')}
          childrenPosition="right"
        />
      }
    />
  );
};
