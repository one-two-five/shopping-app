import React from 'react'
import './basket-summary-product.css'

function BasketSummaryProduct(props) {
    return (
        <div className='basket-summary-product'>
            <img alt='Product' src={ props.product.img }></img>
            <div className='basket-summary-product-info'>
                <p>{ props.product.title }</p>
                <h3>£{ props.product.price }</h3>
            </div>
        </div>
    )
}

export default BasketSummaryProduct