import React, { useContext } from 'react';
import './badge.css'
import { BasketContext } from '../../context/basket-context';

function Badge() {

    const [count, setCount] = useContext(BasketContext);

    return (
        <div className='badge-container'>
            <p className='badge'>{count}</p>
        </div>
    );
}

export default Badge