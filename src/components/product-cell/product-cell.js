import React from 'react'
import './product-cell.css'

function ProductCell(props) {
    return (
        <div className='product-cell'>
            <h5>{props.item.title}</h5>
            <p>{props.item.info}</p>
            <p>Rating: {props.item.rating}</p>
            <p>£{props.item.price}</p>
            <img src={props.item.img}></img>
        </div>
    )
}

export default ProductCell
