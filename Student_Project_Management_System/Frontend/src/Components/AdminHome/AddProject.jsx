import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './AddProjectStyles.css';
const AddProjects = () => {
  const navigate = useNavigate(); // Initialize history

  const initialProjectData = {
    projectName: '',
    technologiesUsed: '',
    projectDescription: '',
  };

  const [projectData, setProjectData] = useState(initialProjectData);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/admin/addProject', projectData)
      .then(response => {
        console.log('Project added:', response.data);
        setProjectData(initialProjectData);
        setIsSuccess(true); // Set success message to true
        setTimeout(() => {
          setIsSuccess(false); // Reset success message after 3 seconds
          navigate('/admin/dashboard'); // Navigate back to admin dashboard after success
        }, 3000);
      })
      .catch(error => {
        console.error('Error adding project: ', error);
      });
  };

  return (
    <div>
      <center><h2>Add Projects</h2></center>
      {isSuccess && <p className="success-message">Project Added Successfully</p>} {/* Show success message */}
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
          />
        </label>
        <label>
          Technologies Used:
          <input
            type="text"
            name="technologiesUsed"
            value={projectData.technologiesUsed}
            onChange={handleChange}
          />
        </label>
        <label>
          Project Description:
          <textarea
            name="projectDescription"
            value={projectData.projectDescription}
            onChange={handleChange}
          ></textarea>
        </label>
        <center><button type="submit">Add Project</button></center>
      </form>
    </div>
  );
};

export default AddProjects;
