import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <header>
          <ul>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/todo'>Todo</Link></li>
          </ul>
        </header>
    )
}

export default Header
