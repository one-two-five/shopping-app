import React, { useContext } from 'react'
import './basket-summary-cell.css'
import BasketSummaryProduct from './basket-summary-product'
import { BasketContext } from '../../context/basket-context'

function BasketSummaryCell(props) {
    const [state, dispatch] = useContext(BasketContext)
    
    const getTotal = () => {
        const productArray = Object.keys(state.products).map(key => { 
            return state.products[key] 
        })
        console.log(productArray)
        
        const addPrices = productArray.reduce((total, product) => { 
            return total + product.price 
        },0)
        return addPrices
    }
    
    const products = Object.keys(state.products).map(key => {
        let product = state.products[key]
        return <BasketSummaryProduct key={key} product={product}/>
    })

    const total = (Object.keys(state.products).length === 0 ) ? 0 : getTotal()
    
    return (
        <div className='basket-summary-cell'>
            <h1>Order Summary</h1>
            {products}
            <div className='total'>
                <h3>Total</h3>
                <h2 className='summary-price'>£{total}</h2>
            </div>
            <button className='checkout-button'>Checkout</button>
        </div>
    )
}

export default BasketSummaryCell