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
            <BackendButton title="Cat fact" route="/backendComponents/CatFact"/>
            <BackendButton title="Bitcoin price" route="/backendComponents/BitcoinPrice"/>
            <BackendButton title="Activity" route="/backendComponents/Activity" />
            <BackendButton title="Dog image" route="/backendComponents/DogImage" />
        </div>
    )
}

export default HomePage;
