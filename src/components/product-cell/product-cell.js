import React, { useContext } from 'react'
import './product-cell.css'
import Stars from '../stars/stars'
import { BasketContext, BasketContextProvider } from '../../context/basket-context'

function ProductCell(props) {

    const [count, setCount] = useContext(BasketContext)

    const increment = () => {
        setCount(count + 1);
        console.log(count)
    }

    return (
        <div className='product-cell'>
            <img src={props.item.img}></img>
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
