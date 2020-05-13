import React from 'react'
import './product-cell.css'

function ProductCell(props) {
    return (
        <div className='product-cell'>
            <img src={props.item.img}></img>
            <h4>{props.item.title}</h4>
            <h5>{props.item.info}</h5>
            <span className='pound'>£</span><span className='price'>{props.item.price}</span>
            <p>Was - £{props.item.was}</p>
            <p>Rating: {props.item.stars}</p>
        </div>
    )
}

export default ProductCell
