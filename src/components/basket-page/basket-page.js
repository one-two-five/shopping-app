import React, {useContext} from 'react';
import './basket-page.css'
import BasketProductRow from './basket-product-row';
import BasketSummaryCell from './basket-summary-cell';
import { BasketContext } from '../../context/basket-context';

function BasketPage() {
    const [state, dispatch] = useContext(BasketContext)
    console.log(state)
    
    const products = Object.keys(state.products).map(key => {
        let product = state.products[key]
        return <BasketProductRow key={key} product={product} id={key}/>
    }) 

    Object.keys(state.products).map(key => {
        console.log(key)
    }) 

    return (
        <div className='basket-header-container'>
            <h1 className='basket-header'>Basket</h1>
            <div className='basket-flex'>
                <div className='basket-product-container'>
                    {products}
                </div>
                <div className='basket-summary-container'>
                    <BasketSummaryCell/>
                </div>
            </div>
        </div>
    )
}

export default BasketPage;