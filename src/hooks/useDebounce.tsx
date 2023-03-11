import { useEffect, useState } from "react"

const useDebounce = (value:any, delay:any) => {
    const [debouncedValue, setDebounceValue] = useState(value)
    useEffect(():any=> {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])
    return debouncedValue;
}

export default useDebounce