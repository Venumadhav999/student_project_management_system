import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ListProjects.css';
import { Link } from 'react-router-dom';
export default function DisplayProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/student/projects') // Assuming this endpoint fetches project data
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  return (
    <div className="display-projects">
      <center><h2>Project Information</h2></center>
      
      <table className="projects-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Technologies Used</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.technologiesUsed}</td>
              <td><Link to={`/view/${project.id}`} className="button-style">View</Link></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
