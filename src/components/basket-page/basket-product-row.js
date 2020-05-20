import React from 'react';
import './basket-product-row.css'

function BasketProductRow(props) {
    return(
        <div className='basket-product-row'>
            <div className='basket-product-row-left'>
                <img alt='Product' src={ props.product.img }></img>
                <button className='delete-button'>Delete</button>
            </div>
            <div className='basket-product-row-right'>
                <h3>{props.product.title}</h3>
                <p>{props.product.info}</p>
                <h2>£{props.product.price}</h2>
                <p className="extra-info">6 Year Guarantee Included</p>
            </div>
        </div>
    )
}

export default BasketProductRow