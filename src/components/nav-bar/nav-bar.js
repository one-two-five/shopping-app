import React from 'react'
import {Link} from 'react-router-dom'
import './nav-bar.css';

function Nav() {
    return (
        <nav>
            <ul className='nav-links'>
                <Link className="link" to="./">
                    <li>Home</li>
                </Link>
                <Link className="link" to="./turntables">
                    <li>Turntables</li>
                </Link>
                <Link className="link" to="./speakers">
                    <li>Speakers</li>
                </Link>
                <Link className="link" to="./basket">
                    <li>Basket</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;