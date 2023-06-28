import React, {useEffect, useState} from 'react';

function BitcoinPrice(props) {
    const [text, setText] = useState('');
    const axios = require('axios');
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
          };
          
          axios.request(config)
          .then((response) => {
            let data = response.data;
            console.log(data);
            setText(data["bpi"]["USD"]["rate"])
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

export default BitcoinPrice;
