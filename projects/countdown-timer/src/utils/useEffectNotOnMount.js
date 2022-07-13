import { useEffect, useRef } from 'react';

export const useEffectNotOnMount = (callback, dependencies) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current) {
            callback();
        } else {
            isMounted.current = true;
        }
    }, [dependencies, callback])
}