import React from 'react';
import './plp-page.css'
import ProdudctCell from '../product-cell/product-cell';

function ProductListPage(props) {
    return (
        <div>
            <h1 className='plp-header'>{props.title}</h1>
            <ProdudctCell/>
        </div>
    )
}

export default ProductListPage;