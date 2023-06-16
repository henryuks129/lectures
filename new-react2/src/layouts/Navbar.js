import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''>
        <ul className='navbar'>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/Favourite'>Favourite</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar