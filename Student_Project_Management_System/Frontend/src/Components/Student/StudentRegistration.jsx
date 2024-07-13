import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StudentRegistration.css'; // Your CSS file for student registration styling

export default function StudentRegistration() {
  const initialStudentData = {
    name: '',
    department: '',
    email: '',
    password: '',
  };

  const [studentData, setStudentData] = useState(initialStudentData);
  const navigate = useNavigate(); // Access the history object

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/auth/student/register', studentData)
      .then(response => {
        console.log('Student registered:', response.data);
        setStudentData(initialStudentData); // Reset the form fields after successful registration
        // Redirect to the admin dashboard if registration is successful
        navigate('/student/dashboard'); // Replace with your admin dashboard route
      })
      .catch(error => {
        console.error('Error registering student: ', error);
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
      
      <form className="student-registration-form" onSubmit={handleSubmit}>
      <center><h2>Student Registration</h2></center>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={studentData.department}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={studentData.password}
            onChange={handleChange}
          />
        </label>
        <center><button type="submit" className='regbutton'>Register</button></center>
        {/* This button triggers form submission */}
      </form>
    </div>
  );
}
