import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero  from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';

 const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Project/>
      
      <Footer/>
    </div>
  )
}
export default App;
