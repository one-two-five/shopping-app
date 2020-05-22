import React, { useContext } from 'react';
import './basket-product-row.css'
import { BasketContext } from '../../context/basket-context';

function BasketProductRow(props) {

    const [state, dispatch] = useContext(BasketContext)

    const removeProduct = () => {
        const payload = {
            id: props.id
        }
        dispatch({
            payload: payload,
            type: "DELETE_PRODUCTS"
        })
    }

    return(
        <div className='basket-product-row'>
            <div className='basket-product-row-left'>
                <img alt='Product' src={ props.product.img }></img>
                <button onClick={removeProduct} className='delete-button'>Delete</button>
            </div>
            <div className='basket-product-row-right'>
                <h3>{props.product.title}</h3>
                <p>{props.product.info}</p>
                <h2>£{props.product.price}</h2>
                <p className="extra-info">6 Year Guarantee Included</p>
            </div>
        </div>
    )
}

export default BasketProductRow