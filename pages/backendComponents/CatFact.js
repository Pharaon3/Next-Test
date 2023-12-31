import React, {useEffect, useState} from 'react';

function CatFact(props) {
    const [text, setText] = useState('');
    const axios = require('axios');
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://catfact.ninja/fact'
          };
          
          axios.request(config)
          .then((response) => {
            let data = response.data;
            console.log(data);
            setText(data.fact)
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

export default CatFact;
