import { useEffect, useState } from "react";

const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);

    let innerWidth = window.innerWidth;

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (innerWidth <= 600) {
                setIsMobile('isMobile');
                setIsTablet(false);
                setIsDesktop(false);
                setIsPrinting(false);
            } else if (innerWidth > 600 && innerWidth <= 1200) {
                setIsTablet('isTablet');
                setIsMobile(false);
                setIsDesktop(false);
                setIsPrinting(false);
            } else if (innerWidth > 1200 && innerWidth <= 1800) {
                setIsDesktop('isDesktop');
                setIsMobile(false);
                setIsTablet(false);
                setIsPrinting(false);
            } else if (innerWidth > 1800 && innerWidth <= 2400) {
                setIsPrinting('isPrinting');
                setIsMobile(false);
                setIsTablet(false);
                setIsDesktop(false);
            }
        }, [innerWidth]);
    });

    return [isMobile, isTablet, isDesktop, isPrinting];
}

export default useDevice;
