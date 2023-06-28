import React from 'react';
import List from './List'

function Lists() {
    return (
        <div className="lists">
            <List tick={true} />
            <List tick={true} />
            <List tick={false} />
        </div>
    )
}

export default Lists;
