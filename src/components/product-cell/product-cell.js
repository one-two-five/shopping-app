import React from 'react'
import './product-cell.css'

function ProductCell() {
    return (
        <div className='product-cell'>
            <h5>Wharfedale Diamond 9.0 (Black)</h5>
            <p>Speakers Per Pair</p>
            <p>Rating 4.5</p>
            <p>£79</p>
            <img src='https://www.richersounds.com/media/catalog/product/e/b/eb70a5dacca8e469192b02189973c223a77ebb1b_306737.jpg?width=240&height=300&canvas=240:300&quality=80&bg-color=255,255,255&fit=bounds&dpr=2'></img>
        </div>
    )
}

export default ProductCell

// {
//     title: "Wharfedale Diamond 9.0 (Black) ",
//     info: "Speakers Per Pair",
//     stars: 4.5,
//     price: 79,
//     img: "https://www.richersounds.com/media/catalog/product/e/b/eb70a5dacca8e469192b02189973c223a77ebb1b_306737.jpg?width=240&height=300&canvas=240:300&quality=80&bg-color=255,255,255&fit=bounds&dpr=2"
// },