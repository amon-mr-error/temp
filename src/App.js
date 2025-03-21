// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CandidateRegister from './pages/Candidate/CandidateRegister';
import CandidateDashboard from './pages/Candidate/CandidateDashboard';
import CandidateAddCV from './pages/Candidate/CandidateAddCV';
import RecruiterRegister from './pages/Recruiter/RecruiterRegister';
import RecruiterDashboard from './pages/Recruiter/RecruiterDashboard';
import RecruiterJobPositions from './pages/Recruiter/RecruiterJobPositions';
import RecruiterAddJobDescription from './pages/Recruiter/RecruiterAddJobDescription';
import UniversityReport from './pages/UniversityReport';
import UniversityDashboard from './pages/UniversityDashboard';
import UniversityStudentList from './pages/UniversityStudentList';
import UniversityStudentProfile from './pages/UniversityStudentProfile';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate/register" element={<CandidateRegister />} />
        <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="/candidate/add-cv" element={<CandidateAddCV />} />
        <Route path="/recruiter/register" element={<RecruiterRegister />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/add-job-desc" element={<RecruiterAddJobDescription />} />
        <Route path="/recruiter/job-positions" element={<RecruiterJobPositions />} />
        <Route path="/university/report" element={<UniversityReport />} />
        <Route path="/university/dashboard" element={<UniversityDashboard />} />
        <Route path="/university/students" element={<UniversityStudentList />} />
        <Route path="/university/student-profile" element={<UniversityStudentProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
