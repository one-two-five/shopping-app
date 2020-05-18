import React from 'react';
import './badge.css'

function Badge(props) {
    return (
        <div className='badge-container'>
            <p className='badge'>{props.count}</p>
        </div>
    )
}

export default Badge