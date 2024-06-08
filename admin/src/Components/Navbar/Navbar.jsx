import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nadiia2.jpg';
import dropdown from '../../assets/dropdown_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <div>
          <div className='img-profile'>
            <img src={navProfile} alt="" className="nav-profile" />
          </div>
          <img src={dropdown} alt="" className='dropdown-img'/>
        </div>       
    </div>
  )
}

export default Navbar;