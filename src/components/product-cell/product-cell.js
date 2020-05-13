import React from 'react'
import './product-cell.css'
import Stars from '../stars/stars'

function ProductCell(props) {
    return (
        <div className='product-cell'>
            <img src={props.item.img}></img>
            <h4>{props.item.title}</h4>
            <h5>{props.item.info}</h5>
            <span className='pound'>£</span><span className='price'>{props.item.price}</span>
            <p className='was'>Was - £{props.item.was}</p>
            <Stars stars={props.item.stars}/>
        </div>
    )
}

export default ProductCell
