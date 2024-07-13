import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/auth/student/login', loginData)
      .then(response => {
        console.log('Login status:', response.data);
        if (response.data === 'Student logged in successfully') {
          navigate(`/student/dashboard`); // Redirect to student details page
        } else {
          console.error('Login failed');
          setLoginFailed(true);
          // Handle login failure - display error message or take appropriate action
        }
      })
      .catch(error => {
        console.error('Error logging in: ', error);
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

      <form className="admin-login-form" onSubmit={handleSubmit}>
      <center><h2>Student Login</h2></center>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
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
  );
};

export default StudentLogin;
