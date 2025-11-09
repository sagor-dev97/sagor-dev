import React, { useState } from 'react';
import './Project.css';
import busticket from '../../assets/Busticket.png';

const Project = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(true); // Show details
  };

  const closeDetails = () => {
    setShowDetails(false); // Hide details
  };

  return (
    <div id='project' className='container'>
      <div className="header-container">
        <div className="line"></div>
        <h1>My Project</h1>
        <div className="line"></div>
      </div>
      <div className='card'>
        <img src={busticket} alt="Bus Ticket Management" />
        <h5>Bus Ticket Management</h5>
        <p>Here you can include more information about the project, such as its features, technologies used, and any other relevant details.</p>
        <div className='button-container'>
          {!showDetails && (
            <>
              <button onClick={toggleDetails} className='button'>
                View Details
              </button>
              <a 
                href="https://busticket.abiram.xyz/Busticket/Visurbus_2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='button'
              >
                Live Project
              </a>
            </>
          )}
        </div>
        {showDetails && (
          <div className='details'>
            <button onClick={closeDetails} className='close-button'>
              &times; {/* Close sign (X) */}
            </button>
           
            <h1>Technology</h1>
            <button>HTML-5</button>
            <button>CSS-3</button>
            <button>PHP</button>
            <button>Laravel</button>
            <button>JavaScript</button>
            <button>MySQL</button>
            <div className='button-container'>
              <a 
                href="https://github.com/yourusername/busticket" 
                target="_blank" 
                rel="noopener noreferrer"
                className='button'
              >
                Source
              </a>
              <a 
                href="https://busticket.abiram.xyz/Busticket/Visurbus_2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='button'
              >
                Live Project
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
