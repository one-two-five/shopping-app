import React, { useContext } from 'react'
import './product-cell.css'
import Stars from '../stars/stars'
import { BasketContext } from '../../context/basket-context'

function ProductCell(props) {

    const [state, dispatch] = useContext(BasketContext)

    const increment = () => {
        const payload = {
            id: props.item.id,
            data: {
                img: props.item.img,
                title: props.item.title,
                info: props.item.info,
                price: props.item.price,
                was: props.item.was,
                stars: props.item.stars,
            }
        }
        console.log(payload)
        dispatch({
            payload: payload,
            type: "ADD_PRODUCT"
        })
    }

    //add use effect to store local state in this object for added

    // const buttonMessage = (state.products[props.item.id] === undefined ? "")
    // console.log(`message: ${buttonMessage}`)
    // console.log(`blah`)

    return (
        <div className='product-cell'>
            <img alt='Product' src={props.item.img}></img>
            <h4>{props.item.title}</h4>
            <h5>{props.item.info}</h5>
            <span className='pound'>£</span><span className='price'>{props.item.price}</span>
            <p className='was'>Was - £{props.item.was}</p>
            <Stars stars={props.item.stars}/>
            <button type='button' 
                className='add' 
                onClick={increment}>
                Add to Basket
            </button>
        </div>
    )
}

export default ProductCell
