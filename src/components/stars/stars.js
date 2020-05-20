import React from 'react'
import './stars.css'

function Stars(props) {
    const wholeStars = Math.floor(props.stars)
    const remainderStars = props.stars % 1
    const loopAmount = (remainderStars > 0) ? (wholeStars + 1) : wholeStars
    const lastLoopIndex = loopAmount - 1
    const items = []

    for (let index = 0; index < loopAmount; index++) {
        if (index === lastLoopIndex && (remainderStars === 0)) {
            items.push(<img key={index} alt='full-star' className='star' src={require('./star.png')}></img>)
        } else if (index === lastLoopIndex && (remainderStars >= 0.5) && (remainderStars < 0.99)) {
            items.push(<img key={index} alt='half-star' className='star' src={require('./star-half.png')}></img>)
        } else if (index !== lastLoopIndex) {
            items.push(<img key={index} alt='full-star' className='star' src={require('./star.png')}></img>)
        }
    }

    return (
        <div className='star-container'>
            {items}
        </div>
    )
}

export default Stars
