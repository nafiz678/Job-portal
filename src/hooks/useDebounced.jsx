import React, { useEffect, useState } from 'react';

const useDebounced = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])
    
    
    
    
    return debouncedValue;
};

export default useDebounced;