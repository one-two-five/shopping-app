import React from 'react';
import './plp-page.css'
import ProdudctCell from '../product-cell/product-cell';
import { BasketContextProvider } from '../../context/basket-context';

function ProductListPage(props) {

    return (
        <div className='header-container'>
            <h1 className='plp-header'>{props.title}</h1>
            <div className='product-grid'>
                {props.items.map(item => {
                    console.log(item.title)   
                    return (
                        <ProdudctCell item={item} key={item.key}/> 
                    ) 
                })}
            </div>
        </div>
    )
}

export default ProductListPage;