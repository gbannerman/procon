import { useState, SyntheticEvent } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (e: SyntheticEvent) => {
        setValue((e.target as HTMLInputElement).value);
      }
    }
  };
};