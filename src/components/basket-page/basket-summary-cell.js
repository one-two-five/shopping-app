import React from 'react'
import './basket-summary-cell.css'
import BasketSummaryProduct from './basket-summary-product'

function BasketSummaryCell(props) {
    return (
        <div className='basket-summary-cell'>
            <h1>Order Summary</h1>
            <BasketSummaryProduct/>
            <BasketSummaryProduct/>
            <div className='total'>
                <h3>Total</h3>
                <h2 className='summary-price'>£300</h2>
            </div>
            <button className='checkout-button'>Checkout</button>
        </div>
    )
}

export default BasketSummaryCell