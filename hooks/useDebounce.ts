
import { useState, useEffect } from 'react';

// This custom hook delays updating a value until a certain amount of time has passed without any new updates.
// It's perfect for features like search-as-you-type to avoid sending too many API requests.
export function useDebounce<T,>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed.
    // This ensures that we only update the debounced value when the user has stopped typing.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if the value or delay changes.

  return debouncedValue;
}
