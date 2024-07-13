import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Your CSS file for admin login styling

const AdminLogin = () => {
  const initialAdminCredentials = {
    email: '',
    password: '',
  };

  const [adminCredentials, setAdminCredentials] = useState(initialAdminCredentials);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials({ ...adminCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/auth/admin/login', adminCredentials)
      .then(response => {
        console.log('Admin login response:', response.data);
        if (response.data === 'Admin logged in successfully') {
          navigate('/admin/dashboard'); // Redirect to admin dashboard upon successful login
        } else {
          console.error('Admin login failed');
          setLoginFailed(true);
          // Handle login failure (display error message or perform other actions)
        }
      })
      .catch(error => {
        console.error('Error logging in as admin: ', error);
        // Handle login failure due to network or server issues
        setLoginFailed(true);
      });
  };

  return (
    <div>
      <div className="image">
      <img
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww"
            alt="Project Work"
          />
      </div>

      <div className='container'>
      <form className="admin-login-form" onSubmit={handleSubmit}>
      <center><h2>Admin Login</h2></center>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={adminCredentials.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={adminCredentials.password}
            onChange={handleChange}
          />
        </label>
        
        <center><button type="submit">Login</button></center>
        {loginFailed && (
            <div className="login-failed-message">
              <p style={{ fontWeight: 'bold', color: 'black',textAlign:'center' }}>Invalid Credentials.. Try Again..!!</p>
            </div>
          )}
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;
