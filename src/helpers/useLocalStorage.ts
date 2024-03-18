import { useState, useEffect } from 'react';
import { Option } from '../types/Options';

export function useLocalStorage(
  initialValue: string | number | Option,
  key: string,
) {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
