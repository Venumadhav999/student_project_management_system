import React, { useState } from 'react';
import './StdHome.css';
import DisplayProjects from './ListProjects';
//import { Link } from 'react-router-dom';

const StudHome = () => {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = (confirmed) => {
    if (confirmed) {
      window.location.href = '/'; // Change this to your desired home page URL
    } else {
      setShowLogoutConfirmation(false);
    }
  };

  return (
    <div className='student-container'>
      <nav className="navbar">
        <div>
          <a href="https://javaguides.net" className="navbar-brand">Student Project Management</a>
        </div>
        <div className="logout-button">
          <button onClick={handleLogout} className="button-logout">Logout</button>
        </div>
      </nav>
      <div className='projects'>
        <DisplayProjects />
      </div>
      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <div className="confirmation-box">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleConfirmLogout(true)}>Yes</button>
            <button onClick={() => handleConfirmLogout(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudHome;
