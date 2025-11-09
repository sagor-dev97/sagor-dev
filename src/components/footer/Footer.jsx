import React from 'react'
import './Footer.css';
const Footer = () => {
    const currentYear=new Date().getFullYear();
  return (
    <div className='footer'>
       <p> Copyright <span>&copy;
       {currentYear}</span> Muhammad Sagor. All Right resurved.</p> 
       
    </div>

  )
}

export default Footer