import React from 'react';
import './basket-page.css'
import BasketProductRow from './basket-product-row';
import BasketSummaryCell from './basket-summary-cell';

function BasketPage() {
    return (

        <div className='basket-header-container'>
            <h1 className='basket-header'>Basket</h1>
            <div className='basket-flex'>
                <div className='basket-product-container'>
                    <BasketProductRow/>
                    <BasketProductRow/>
                </div>
                <div className='basket-summary-container'>
                    <BasketSummaryCell/>
                </div>
            </div>
        </div>
    )
}

export default BasketPage;