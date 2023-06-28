import React from 'react';
import Lists from './componenets/Lists';
import Heading from './componenets/Heading';
import Footer from './componenets/Footer'

function HomePage() {
    return (
        <div className='app'>
            <Heading />
            <Lists />
            <Footer />
        </div>
    )
}

export default HomePage;
