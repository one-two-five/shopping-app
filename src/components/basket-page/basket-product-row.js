import React from 'react';
import './basket-product-row.css'

function BasketProductRow() {
    return(
        <div className='basket-product-row'>
            <div className='basket-product-row-left'>
                <img alt='Product' src="https://www.richersounds.com/media/catalog/product/b/8/b848d36da64ed7ae73fb384c05dfc22227926dcf_319228_v5.jpg?width=260&height=220&canvas=260:220&quality=80&bg-color=255,255,255&fit=bounds&dpr=2"></img>
                <button className='delete-button'>Delete</button>
            </div>
            <div className='basket-product-row-right'>
                <h3>Q Acoustics Q3010i (Black)</h3>
                <p>Speakers Per Pair</p>
                <h2>£150</h2>
                <p className="extra-info">6 Year Guarantee Included</p>
            </div>
        </div>
    )
}

export default BasketProductRow