import React, { useContext } from 'react';
import './badge.css'
import { BasketContext } from '../../context/basket-context';

function Badge() {

    const [state, dispatch] = useContext(BasketContext);
    return (
        <div className='badge-container'>
            <p className='badge'>{Object.keys(state.products).length}</p>
        </div>
    );
}

export default Badge