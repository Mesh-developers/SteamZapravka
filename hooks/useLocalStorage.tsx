import { useState, useCallback, useEffect } from 'react';

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;
type RemoveValue = () => void;

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>, RemoveValue] {
  const [value, setValue] = useState<T>(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  // Инициализация значения после монтирования на клиенте
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    } finally {
      setIsInitialized(true);
    }
  }, [key]);

  const setStoredValue: SetValue<T> = useCallback((newValue) => {
    if (!isInitialized) return;

    try {
      const valueToStore = newValue instanceof Function
        ? newValue(value)
        : newValue;

      setValue(valueToStore);

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value, isInitialized]);

  const removeValue: RemoveValue = useCallback(() => {
    if (!isInitialized) return;

    setValue(initialValue);

    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
      }
    }
  }, [key, initialValue, isInitialized]);

  return [value, setStoredValue, removeValue];
}

export default useLocalStorage;