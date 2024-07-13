import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Home = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
    setShowRegisterDropdown(false); // Close register dropdown when clicking on login
  };

  const toggleRegisterDropdown = () => {
    setShowRegisterDropdown(!showRegisterDropdown);
    setShowLoginDropdown(false); // Close login dropdown when clicking on register
  };

  return (
    <div>
      <nav className="navbarhome">
        <div>
          <a href="https://javaguides.net" className="navbar-brand">
            Student Project Management
          </a>
        </div>
        <div className="dropdowns">
          <div className="dropdown">
            <button onClick={toggleRegisterDropdown} className="button-logout">
              Register
            </button>
            {showRegisterDropdown && (
              <div className="dropdown-content">
                <Link to="/register/admin" className="dropdown-link">
                  As Admin
                </Link>
                <Link to="/register/student" className="dropdown-link">
                  As Student
                </Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button onClick={toggleLoginDropdown} className="button-logout">
              Login
            </button>
            {showLoginDropdown && (
              <div className="dropdown-content">
                <Link to="/login/admin" className="dropdown-link">
                  As Admin
                </Link>
                <Link to="/login/student" className="dropdown-link">
                  As Student
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='image'>
          <img
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
            alt="Project Work"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
