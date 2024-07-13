import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminRegistration.css'; // Your CSS file for admin registration styling

export default function AdminRegistration() {
  const initialAdminData = {
    name: '',
    department: '',
    email: '',
    password: '',
  };

  const [adminData, setAdminData] = useState(initialAdminData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/auth/admin/register', adminData)
      .then(response => {
        console.log('Admin registered:', response.data);
        // Redirect to admin dashboard upon successful registration
        navigate('/admin/dashboard');
        setAdminData(initialAdminData); // Reset the form fields after successful registration
      })
      .catch(error => {
        console.error('Error registering admin: ', error);
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
      
      <form className="admin-registration-form" onSubmit={handleSubmit}>
      <center><h2>Admin Registration</h2></center>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={adminData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={adminData.department}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={adminData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={adminData.password}
            onChange={handleChange}
          />
        </label>
        <center><button type="submit" className="button-style">Register</button></center>
        {/* Use button instead of Link for submission */}
      </form>
    </div>
  );
}
