import { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';

export const useGlobalContext = () => {
  const value = useContext(GlobalContext);
  return value;
};
