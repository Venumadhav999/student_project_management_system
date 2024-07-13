
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AdminRegistration from './Components/Admin/AdminRegistration'; 
import AdminLogin from './Components/Admin/AdminLogin';
import StudentRegistration from './Components/Student/StudentRegistration';
import StudentLogin from './Components/Student/StudentLogin';
import AdmHome from './Components/AdminHome/AdmHome';
import StdHome from './Components/StudentHome/StdHome';
import OneProject from './Components/StudentHome/oneProject';
import AddProject from './Components/AdminHome/AddProject';
import UpdateProject from './Components/AdminHome/UpdateProject';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register/admin' element={<AdminRegistration />} /> {/* Route for admin registration */}
          <Route path='/login/admin' element={<AdminLogin />} />{/* Route for admin login */}
          <Route path='/register/student' element={<StudentRegistration />} /> {/* Route for student registration */}
          <Route path='/login/student' element={<StudentLogin />} /> {/* Route for student login */}
          <Route path='/admin/dashboard' element={<AdmHome/>} /> {/* Route for admin dashboard */}
          <Route path='/student/dashboard' element={<StdHome/>} /> {/* Route for student dashboard */}
          <Route path='/view/:id' element={<OneProject/>} /> {/* Route for student dashboard */}
          <Route path='/add/projects/' element={<AddProject/>} /> {/* Route for student dashboard */}
          <Route path='/update/:id' element={<UpdateProject/>} /> {/* Route for student dashboard */}
          
        </Routes>
      </Router>
    );
}

export default App;
