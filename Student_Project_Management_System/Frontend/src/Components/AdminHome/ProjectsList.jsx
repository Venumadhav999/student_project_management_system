import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjectList.css'
export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for delete success message

  useEffect(() => {
    axios.get('http://localhost:8080/student/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  const deleteProject = (projectId) => {
    axios.delete(`http://localhost:8080/admin/delete/project/${projectId}`)
      .then(response => {
        console.log('Project deleted successfully');
        setProjects(projects.filter(project => project.id !== projectId));
        setDeleteSuccess(true); // Set delete success message state to true
        setTimeout(() => {
          setDeleteSuccess(false); // Clear success message after a delay (e.g., 3 seconds)
        }, 3000); // Set the time duration for displaying the message
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
  };

  return (
    <div className="display-projects">
      <center><h2>Project Information</h2></center>
      <br></br>
      {deleteSuccess && <div className="success-message1">Project Deleted Successfully!</div>}
      <br></br>
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
              <td>
                <Link to={`/view/${project.id}`} className="button-style">View</Link>
                <button onClick={() => deleteProject(project.id)} className="button-delete">Delete</button>
                <Link to={`/update/${project.id}`} className="button-delete">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
