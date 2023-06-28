import React, { useState } from 'react';
import Image from 'next/image';

function ActionButton(props) {
    const [isChecked, setIsChecked] = useState(props.tick);
    const tick = () => {
        if(isChecked) setIsChecked(false)
        else setIsChecked(true)
    }
    return (
        <div className="actionButton">
            {props.title}
        </div>
    )
}

export default ActionButton;
