import React from 'react'
import './basket-summary-product.css'

function BasketSummaryProduct(props) {
    return (
        <div className='basket-summary-product'>
            <img alt='Product' src='https://www.richersounds.com/media/catalog/product/8/b/8b569f6de70b03acc24a117a7b51501dfcee3bdf_402083_v2.jpg?width=260&height=220&canvas=260:220&quality=80&bg-color=255,255,255&fit=bounds'></img>
            <div className='basket-summary-product-info'>
                <p>Q Acoustics Q3010i (Black)</p>
                <h3>£199</h3>
            </div>
        </div>
    )
}

export default BasketSummaryProduct