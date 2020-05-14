import React from 'react';
import './basket-page.css'

function BasketPage() {
    return (

        <div className='basket-header-container'>
            <h1 className='basket-header'>Basket</h1>
            <div className='basket-flex'>
                <div className='basket-product-container'>
                    <div className='one'>Prod 1</div>
                    <div className='three'>Prod 2</div>
                    <div className='four'>Prod 4</div>
                </div>
                <div className = 'two'>Summary</div>
            </div>
        </div>
        
    )
}

export default BasketPage;