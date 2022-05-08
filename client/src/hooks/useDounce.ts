import { useEffect, useState } from 'react'

/**
 * @credits https://usehooks-ts.com/react-hook/use-debounce
 * @description Introduces a delay when a user types in an input
 * @param value 
 * @param delay 
 * @returns debounced value
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce