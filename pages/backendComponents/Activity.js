import React, {useEffect, useState} from 'react';

function Activity(props) {
    const [text, setText] = useState('');
    const axios = require('axios');
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://boredapi.com/api/acMvity'
          };
          
          axios.request(config)
          .then((response) => {
            let data = response.data;
            if (data.activity) {
              setText(data.activity)
            } else {
              setText(JSON.stringify(data))
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div className='backend-textpage'>
            {text}
        </div>
    )
}

export default Activity;
