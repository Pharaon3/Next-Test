import React, { useState } from 'react';
import Image from 'next/image';

function List(props) {
    const [isChecked, setIsChecked] = useState(props.tick);
    const tick = () => {
        if(isChecked) setIsChecked(false)
        else setIsChecked(true)
    }
    return (
        <div className="list">
            <div className="list-mark">A</div>
            <div className="list-content">List item</div>
            <div className="list-values">
                <div className="list-value"> 100 + </div>
                <Image className="tickSvg" src={isChecked ? "/svg/tick.svg" : "/svg/untick.svg"} alt="Tick" width={24} height={24} onClick={tick} />
            </div>
        </div>
    )
}

export default List;
