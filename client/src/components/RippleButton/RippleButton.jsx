import React, { useState, useRef } from 'react';
import classes from './rippleButton.module.css';

const RippleButton = ({ clickAction, disabled }) => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const btnRef = useRef();    

    const handleClick = (e) => {
        getPosition(e);
        btnRef.current.classList.add(classes.pulse);
        btnRef.current.addEventListener('animationend', () => {
            btnRef.current.classList.remove(classes.pulse);
        });

        if(clickAction && typeof clickAction === 'function'){
            clickAction();
        }
    }

    function getPosition(e) {
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;

        setTop(y);
        setLeft(x);
    }

    const positionStyle = {
        'top': top + 'px',
        'left': left + 'px'
    };

  return (
    <button ref={btnRef} className={`${classes.btn} ${disabled? classes.disabled: ''}`} onClick={handleClick} disabled={disabled}>
        <span style={positionStyle} ></span>
        Submit
    </button>
  )
}

export default RippleButton