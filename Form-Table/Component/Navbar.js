import React from 'react'
import '../Component/Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
          <ul className ='nav-ul'>
            <Link to='/form' className='nav-links'>
            <li className='nav-item'> FORM PAGE</li>
            </Link>
            <Link to='/table' className='nav-links'>
            <li className='nav-item'> TABLE PAGE</li>
            </Link>
          </ul>
</nav>
    </div>
  )
}

export default Navbar
