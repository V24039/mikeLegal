import { useEffect, useState } from "react";

// to handle query debouncing
export const useDebounce=(value, delay)=>{
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // setting the debounced inside setTimeout so that the values set only after delay ms
    const handler = setTimeout(()=>{
      setDebouncedValue(value);
    },delay)

    // claring the timeput once the setting of value is complete
    return () => clearTimeout(handler);
  }, [value, delay])
  
  return debouncedValue;
}