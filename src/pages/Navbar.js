import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear any authentication tokens or state if needed.
    navigate('/');
  };
  
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">RecruitPro</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/candidate/login" className="text-white hover:text-gray-200">Candidate Login</Link>
          <Link to="/recruiter/login" className="text-white hover:text-gray-200">Recruiter Login</Link>
          <Link to="/university/report" className="text-white hover:text-gray-200">University Report</Link>
          <button onClick={handleLogout} className="text-white hover:text-gray-200">Sign Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
