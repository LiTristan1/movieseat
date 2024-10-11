import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <ul className = 'Navigation-Bar'>
            <div id = 'brand-name'>MyPlex</div>
            <li>
                <Link to = '/'>Home</Link>
            </li>
            <li>
                <Link to = '/Map'>Search Theatres</Link>
            </li>
            <li>
                <Link to = '/Login'>Accounts</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;