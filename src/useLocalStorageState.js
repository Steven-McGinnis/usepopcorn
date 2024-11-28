import { useState, useEffect } from 'react';

/**
 * Custom hook to manage state with localStorage.
 *
 * @param {any} initialState - The initial state value.
 * @param {string} key - The key under which the state is stored in localStorage.
 * @returns {[any, Function]} - Returns the current state and a function to update it.
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
