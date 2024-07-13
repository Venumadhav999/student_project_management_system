
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// Your CSS file for project details styling

const DeleteProject = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/admin/delete/project/${id}`)
      .then(() => {
        // Delete successfully, update UI or show a message
        setProjects(projects.filter(project => project.id !== projectIdToDelete));
        alert('The project was deleted successfully.');
      })
      .catch(error => {
        console.error('Error deleting project: ', error);
      })
      .finally(() => {
        setShowConfirmation(false);
      });
  };
  const handleDeleteClick = (id) => {
    setProjectIdToDelete(id);
    setShowConfirmation(true);
  };

  

  const cancelDelete = () => {
    setShowConfirmation(false);
  };
  if (recordNotFound) {
    return (
      <div className="form-container">
        <p>Record not available</p>
      </div>
    );
  }

  return (
    <div className="delete-project">
      {projects ? (
        <div>
          <td>
                
                <button onClick={() => handleDeleteClick(project.id)} className="button-style">Delete</button>
               
              </td>
        </div>
      ) : (
        <p>Loading...</p>
      )}
       {showConfirmation && (
        <div className="confirmation-box">
          <p>Are you sure you want to delete the project?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
    
  );
};

