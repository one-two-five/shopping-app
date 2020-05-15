import React from 'react';
import './basket-product-row.css'

function BasketProductRow() {
    return(
        <div className='basket-product-row'>
            <div className='basket-product-row-left'>
                <h1>-</h1>
                <h1>1</h1>
                <h1>-</h1>
            </div>
            <div className='basket-product-row-right'>
                <h1>-</h1>
                <h1>2</h1>
                <h1>-</h1>
            </div>
        </div>
    )
}

export default BasketProductRow