import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    // nav section ul, li, link and hambuger menu //
    <>
        <nav className='navbar'>
            
            <ul className='nav-ul'>
<li className='nav-item'>
<Link to='/form' className='nav-links'>
FORM PAGE
</Link>
 </li>

 
</ul>

        
        </nav>
    </>
  )
}

export default Navbar
