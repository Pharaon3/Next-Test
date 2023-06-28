import React from 'react';
import BackendButton from './backendComponents/backendButton';

function HomePage() {
    return (
        <div className='backend-app'>
            <BackendButton title="Cat fact" />
            <BackendButton title="Bitcoin price" />
            <BackendButton title="Activity" />
            <BackendButton title="Dog image" />
        </div>
    )
}

export default HomePage;
