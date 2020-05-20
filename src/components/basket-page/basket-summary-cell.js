import React, { useContext } from 'react'
import './basket-summary-cell.css'
import BasketSummaryProduct from './basket-summary-product'
import { BasketContext } from '../../context/basket-context'

function BasketSummaryCell(props) {

    const [state, dispatch] = useContext(BasketContext)

    const productArray = Object.keys(state.products).map(key => { 
        return state.products[key] 
    })

    const getTotal = () => {
        const totalPrice = productArray.reduce((total, product) => { 
            return total + product.price 
        }, 0)
        return totalPrice
    }

    const basketSummaryProducts = productArray.map( (product, index) => {
        return <BasketSummaryProduct key={index} product={product}/>
    })

    const total = (productArray.length === 0 ) ? 0 : getTotal()
    
    return (
        <div className='basket-summary-cell'>
            <h1>Order Summary</h1>
            {basketSummaryProducts}
            <div className='total'>
                <h3>Total</h3>
                <h2 className='summary-price'>£{total}</h2>
            </div>
            <button className='checkout-button'>Checkout</button>
        </div>
    )
}

export default BasketSummaryCell