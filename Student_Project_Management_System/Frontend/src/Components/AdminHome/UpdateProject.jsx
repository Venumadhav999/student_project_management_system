import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProjectStyles.css';

const UpdateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState({
    projectName: '',
    technologiesUsed: '',
    projectDescription: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/admin/projects/${id}`)
      .then(response => {
        setProjectData(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/admin/update/project/${id}`, projectData)
      .then(response => {
        console.log('Project updated:', response.data);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
          navigate('/admin/dashboard');
        }, 3000);
      })
      .catch(error => {
        console.error('Error updating project: ', error);
      });
  };

  return (
    <div>
      <center><h2>Update Project</h2></center>
      {updateSuccess && <p className="success-message">Project Updated Successfully!</p>}
      <form className="form-container" onSubmit={handleUpdate}>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange} // Utilize handleChange here
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
        {/* Other input fields using handleChange similarly */}
        <center><button type="submit">Update Project</button></center>
      </form>
    </div>
  );
};

export default UpdateProject;
