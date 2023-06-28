import React, { useState } from 'react';
import Image from 'next/image';

function BackendButton(props) {
    const backendButtonClicked = () => {
        console.log('"' + props.title + '" Button Clicked!');
    }
    return (
        <div className="backendButton" onClick={backendButtonClicked}>
            {props.title}
        </div>
    )
}

export default BackendButton;
