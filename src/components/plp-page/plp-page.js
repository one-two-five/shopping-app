import React from 'react';
import './plp-page.css'
import ProdudctCell from '../product-cell/product-cell';


function ProductListPage() {
    return (
        <div>
            <h1 className='plp-header'>Product List Page</h1>
            <ProdudctCell/>
        </div>
    )
}

export default ProductListPage;