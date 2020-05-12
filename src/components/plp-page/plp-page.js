import React from 'react';
import './plp-page.css'
import ProdudctCell from '../product-cell/product-cell';

function ProductListPage(props) {
    props.items.forEach(element => {
        console.log(element.title)        
    });
    return (
        <div>
            <h1 className='plp-header'>{props.title}</h1>
        </div>
    )
}

export default ProductListPage;