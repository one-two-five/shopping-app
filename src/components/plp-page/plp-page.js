import React from 'react';
import './plp-page.css'
import ProdudctCell from '../product-cell/product-cell';

function ProductListPage(props) {

    return (
        <div>
            <h1 className='plp-header'>{props.title}</h1>
            {props.items.map(item => {
                console.log(item.title)   
                {/* return ProdudctCell(element)   */}
                return <ProdudctCell item={item} key={item.key}/>  
            })}
        </div>
    )
}

export default ProductListPage;