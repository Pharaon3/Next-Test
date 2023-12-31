import React, { useState } from 'react';
import Image from 'next/image';

function ActionButton(props) {
    const actionButtonClicked = () => {
        console.log('"' + props.title + '" Button Clicked!');
    }
    return (
        <div className="actionButton" onClick={actionButtonClicked}>
            {props.title}
        </div>
    )
}

export default ActionButton;
