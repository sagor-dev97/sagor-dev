import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='Navbar'>
      <img src={logo} alt='Logo' />
      <div className={`nav-menu ${isMobile ? 'active' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => { setMenu('home'); setIsMobile(false); }}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src='' alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu('about'); setIsMobile(false); }}>About</p>
          </AnchorLink>
          {menu === 'about' ? <img src='' alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#project'>
            <p onClick={() => { setMenu('project'); setIsMobile(false); }}>Project</p>
          </AnchorLink>
          {menu === 'project' ? <img src='' alt='' /> : <></>}
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </div>
      <div className='nav-connect'>Connect with me</div>
      <div className='hamburger' onClick={handleMenuToggle}>
        {isMobile ? '✖️' : '☰'}
      </div>
    </div>
  );
};

export default Navbar;
