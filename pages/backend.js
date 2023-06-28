import React from 'react';
import BackendButton from './backendComponents/backendButton';

function HomePage() {
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
