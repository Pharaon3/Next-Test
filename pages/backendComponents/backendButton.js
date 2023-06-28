import React, { useState } from 'react';
import { useRouter } from 'next/router';

function BackendButton(props) {
    const router = useRouter();
    const axios = require('axios');
    const backendButtonClicked = () => {
        console.log('"' + props.title + '" Button Clicked!');
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: props.url
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            props.setValue(response.data)
            // router.push(props.route);
            // router.push({
            //     pathname: props.route,
            //     query: { data: JSON.stringify(response.data) },
            //   });
          })
          .catch((error) => {
            console.log(error);
          });
          
    }
    return (
        <div className="backendButton" onClick={backendButtonClicked}>
            {props.title}
        </div>
    )
}

export default BackendButton;
