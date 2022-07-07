import React, { useEffect } from "react";

import style from './textComp.module.css';

const TextComp = ({ text,
    media,
    isMobile,
    isTablet,
    isPrinting,
    isDesktop
 }) => {

    let device = isMobile || isTablet || isPrinting || isDesktop;

    return (
        <div className={style.container}>
           <div>
                Hi, {text}
           </div>
           <div>
                {media} 
           </div>
           <div>
                {device}
           </div>
        </div>
    );
}

export default TextComp;
