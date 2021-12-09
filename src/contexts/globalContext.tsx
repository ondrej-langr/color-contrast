import { createContext, FC, useEffect, useReducer } from 'react';
// @ts-ignore
import ColorContrastChecker from 'color-contrast-checker';
const colorContrastChecker = new ColorContrastChecker();

export type GradeValue = {
  value: number;
  passed: boolean;
};

export type Grades = {
  aaNormal: GradeValue;
  aaLarge: GradeValue;
  aaaNormal: GradeValue;
  aaaLarge: GradeValue;
};

export interface IGlobalContext {
  grades: Grades;
  textValue: string;
  backgroundValue: string;

  inputTextValue: string;
  inputBackgroundValue: string;

  updateValues: UpdateValuesCallback;
}

export type IGlobalContextValues = Omit<IGlobalContext, 'setValue'>;
export type UpdateValuesCallbackPayload<T extends keyof IGlobalContextValues> =
  {
    name: T;
    value: IGlobalContext[T];
  }[];

type UpdateValuesCallback = <T extends keyof IGlobalContextValues>(
  payload: UpdateValuesCallbackPayload<T>
) => void;

export const globalContextDefaultValue: IGlobalContext = {
  grades: {
    aaNormal: { value: 0, passed: true },
    aaLarge: { value: 0, passed: true },
    aaaNormal: { value: 0, passed: true },
    aaaLarge: { value: 0, passed: true },
  },
  textValue: '#000',
  backgroundValue: '#fff',

  inputTextValue: '#000',
  inputBackgroundValue: '#fff',

  updateValues: () => {},
};

export const GlobalContext = createContext<IGlobalContext>(
  globalContextDefaultValue
);

function reducer<T extends keyof IGlobalContextValues>(
  state: IGlobalContext,
  payload: UpdateValuesCallbackPayload<T>
) {
  const newState = { ...state };

  for (const payloadValue of payload) {
    newState[payloadValue.name] = payloadValue.value;
  }

  return newState;
}

export const GlobalContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalContextDefaultValue);

  const updateValues: UpdateValuesCallback = (payload) => dispatch(payload);

  useEffect(() => {
    const { backgroundValue, textValue } = state;

    const [
      { WCAG_AA: aaNormal, WCAG_AAA: aaaNormal },
      { WCAG_AA: aaLarge, WCAG_AAA: aaaLarge },
    ] = colorContrastChecker.checkPairs([
      // normal font size
      { colorA: backgroundValue, colorB: textValue, fontSize: 16 },
      // Large font size
      { colorA: backgroundValue, colorB: textValue, fontSize: 20 },
    ]);

    updateValues([
      {
        name: 'grades',
        value: {
          aaLarge: { value: 0, passed: aaLarge },
          aaNormal: { value: 0, passed: aaNormal },
          aaaLarge: { value: 0, passed: aaaLarge },
          aaaNormal: { value: 0, passed: aaaNormal },
        },
      },
    ]);
  }, [state.backgroundValue, state.textValue]);

  return (
    <GlobalContext.Provider value={{ ...state, updateValues }}>
      {children}
    </GlobalContext.Provider>
  );
};
