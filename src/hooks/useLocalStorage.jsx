import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      // branching logic to define the initial value, reading from localStorage if it's there
      if (window.localStorage.getItem(key)) {
        // is the key already in local storage?
        return JSON.parse(window.localStorage.getItem(key)); // if so, return it
      }
      // otherwise, use the initial value passed in
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
    // the whole block above ^ is just defining the init value for useState
  
    const setValue = (value) => {
      // implement localStorage write functionality
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  
    return [storedValue, setValue];
  };
  