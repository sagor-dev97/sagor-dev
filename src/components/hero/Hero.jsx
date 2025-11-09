import React from 'react';
import './Hero.css';
import hero from '../../assets/sagor.jpeg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={hero} alt="" />
        <h2><span>I'm Muhammad Sagor,</span> Backend Developer based in South Asia</h2>
        <p>I'm a Backend Developer from Dhaka, Bangladesh with 1 year of experience.</p>
        
        <div className="hero-section">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  );
}

export default Hero;
