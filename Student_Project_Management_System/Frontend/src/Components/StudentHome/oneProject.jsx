import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectStyles.css'; // Your CSS file for project details styling

const OneProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [recordNotFound, setRecordNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/student/${id}`) // Replace with your endpoint
      .then(response => {
        console.log('Project data:', response.data);
        if (!response.data) {
          setRecordNotFound(true);
        }
        setProject(response.data); // Set project data to state
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
        setRecordNotFound(true);
      });
  }, [id]);

  if (recordNotFound) {
    return (
      <div className="form-container">
        <p>Record not available</p>
      </div>
    );
  }

  return (
    <div className="project-details">
      {project ? (
        <div>
          <center><h2>Project Details</h2></center>
          <p><strong>Project Name: </strong> {project.projectName}</p>
          <hr/>
          <p><strong>Technologies Used: </strong> {project.technologiesUsed}</p>
          <hr/>
          <p><strong>Project Description: </strong> {project.projectDescription}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OneProject;
