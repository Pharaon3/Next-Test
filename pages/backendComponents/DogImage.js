import React, {useEffect, useState} from 'react';

function DogImage(props) {
    const [text, setText] = useState('');
    const axios = require('axios');
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://dog.ceo/api/breeds/image/random'
          };
          
          axios.request(config)
          .then((response) => {
            let data = response.data;
            console.log(data);
            setText(data.message)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div className='backend-textpage'>
            <img src={text} />
        </div>
    )
}

export default DogImage;
