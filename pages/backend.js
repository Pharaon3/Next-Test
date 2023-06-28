import React, {useState} from 'react';
import BackendButton from './backendComponents/backendButton';

function HomePage() {
    // const [catfact, setCatfact] = useState('');
    // const [bitcoinPrice, setBitcoinPrice] = useState('');
    // const [activity, setActivity] = useState('');
    // const [dogImage, setDogImage] = useState('');
    const catFact = (data) => {
        console.log("data from backend ", data);
        let text = data.fact;
        console.log("text from backend", text);
        
    }
    return (
        <div className='backend-app'>
            <BackendButton title="Cat fact" url="https://catfact.ninja/fact" setValue={catFact} route="/backendComponents/CatFact"/>
            <BackendButton title="Bitcoin price" url="https://api.coindesk.com/v1/bpi/currentprice.json" setValue={setBitcoinPrice} />
            <BackendButton title="Activity" url="https://boredapi.com/api/acMvity" setValue={setActivity} />
            <BackendButton title="Dog image" url="https://dog.ceo/api/breeds/image/random" setValue={setDogImage} />
        </div>
    )
}

export default HomePage;
