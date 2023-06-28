import React from 'react';
import { useRouter } from 'next/router';

function BackendButton(props) {
    const router = useRouter();
    const backendButtonClicked = () => {
        console.log('"' + props.title + '" Button Clicked!');
        router.push(props.route);
    }
    return (
        <div className="backendButton" onClick={backendButtonClicked}>
            {props.title}
        </div>
    )
}

export default BackendButton;
