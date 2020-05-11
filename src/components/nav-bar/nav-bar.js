import React from 'react'

import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <Link to="./">
                    <li>Home</li>
                </Link>
                <Link to="./turntables">
                    <li>Turntables</li>
                </Link>
                <Link to="./speakers">
                    <li>Speakers</li>
                </Link>
                <Link to="./basket">
                    <li>Basket</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;