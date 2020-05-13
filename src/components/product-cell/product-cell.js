import React from 'react'
import './product-cell.css'

function ProductCell(props) {
    return (
        <div className='product-cell'>
            <img src={props.item.img}></img>
            <h4>{props.item.title}</h4>
            <p>{props.item.info}</p>
            <p>Rating: {props.item.stars}</p>
            <p className='price'>£{props.item.price}</p>
        </div>
    )
}

export default ProductCell
