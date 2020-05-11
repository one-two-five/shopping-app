import React from 'react'
import './home.css'

function Home() {
    return (
        <div className='image-container'>
            <img src={require('./image.jpg')} alt="Sound bars background"></img>
        </div>
    )
}

export default Home;