import React, { useState } from 'react';
import './AdmStyles.css'; // Your CSS file for header component styling
import { Link } from 'react-router-dom';
import ProjectsList from './ProjectsList';

const AdmHome = () => {
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
    <div className='admincontainer'>
      <nav className="navbar">
        <div>
          <a href="https://javaguides.net" className="navbar-brand">Student Project Management</a>
        </div>
        <div className='left'>
        <Link to="/add/projects/" className="button-left">Add Projects</Link>
      </div>
        <div className="logout-button">
          <button onClick={handleLogout} className="button-logout">Logout</button>
        </div>

      </nav>

      {showLogoutConfirmation && (
        <div className="logout-confirmation">
          <div className="confirmation-box">
            <p>Are you sure you want to log out?</p>
            <button onClick={() => handleConfirmLogout(true)}>Yes</button>
            <button onClick={() => handleConfirmLogout(false)}>No</button>
          </div>
        </div>
      )}

     
      <br></br>
      <ProjectsList/>
    </div>
  );
};

export default AdmHome;
