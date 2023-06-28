import React from 'react';
import { useRouter } from 'next/router';

function CatFact(props) {
    const router = useRouter();
    const { data } = JSON.parse(router.query);
    console.log("data ", data);
    return (
        <div className='backend-textpage'>
            {data.fact}
        </div>
    )
}

export default CatFact;
