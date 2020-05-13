import React from 'react'
import './stars.css'

function Stars(props) {

    let rating = props.stars
    let wholeNumber = Math.floor(rating)
    let remainder = rating % 1
    let loopAmount = (remainder > 0) ? (wholeNumber + 1) : wholeNumber
    const items = []

    console.log(remainder)

    for (let index = 0; index < loopAmount; index++) {

        if (index === (loopAmount - 1) && (remainder > 0) && (remainder < 0.5)) {
            // don't add star
        } else if (index === (loopAmount - 1) && (remainder > 0) && (remainder < 0.9)) {
            items.push(<img key={index} className='star' src={require('./star-half.png')}></img>)
        } else {
            items.push(<img key={index} className='star' src={require('./star.png')}></img>)
        }
    }

    return (
        <div className='star-container'>
            {items}
        </div>
    )
}

export default Stars
