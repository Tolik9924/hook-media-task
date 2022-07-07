import { useEffect, useState } from "react"

const useMatchMedia = (media) => {
    const [value, setValue] = useState(media);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.matchMedia(value).matches) {
                setValue('matchMedia');
            } else {
                setValue('notMatchMedia');
            }
        });    
    }, []);

    return value;
}

export default useMatchMedia;
