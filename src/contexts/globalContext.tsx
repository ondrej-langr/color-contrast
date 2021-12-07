import { createContext, FC, useEffect, useReducer } from 'react';

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
    console.log();
  }, [state.backgroundValue, state.textValue]);

  return (
    <GlobalContext.Provider value={{ ...state, updateValues }}>
      {children}
    </GlobalContext.Provider>
  );
};
