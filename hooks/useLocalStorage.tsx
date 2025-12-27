import { useState, useCallback } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;
type RemoveValue = () => void;

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>, RemoveValue] {

  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue: SetValue<T> = useCallback((newValue) => {
    const valueToStore = newValue instanceof Function
      ? newValue(value)
      : newValue;

    setValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  }, [key, value]);

  const removeValue: RemoveValue = useCallback(() => {
    setValue(initialValue);
    localStorage.removeItem(key);
  }, [key, initialValue]);

  return [value, setStoredValue, removeValue];
}

export default useLocalStorage;