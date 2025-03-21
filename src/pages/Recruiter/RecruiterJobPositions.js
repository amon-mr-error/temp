// src/pages/Recruiter/RecruiterJobPositions.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';

const RecruiterJobPositions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Expect recruiter credentials to be passed via navigation state (from login)
  const { username, password } = location.state || {};
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!username || !password) {
      // If credentials are missing, redirect to login
      navigate('/login');
      return;
    }
    const fetchJobPostings = async () => {
      try {
        const res = await api.post('/login_jd', { username, password });
        if (res.data && res.data.job_postings) {
          setJobPostings(res.data.job_postings);
        } else {
          setJobPostings([]);
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.error || 'Error fetching job postings');
      } finally {
        setLoading(false);
      }
    };
    fetchJobPostings();
  }, [username, password, navigate]);

  const handleJobPositionClick = (jobPosting) => {
    // Navigate to RecruiterDashboard with the selected job posting
    navigate('/recruiter/dashboard', { state: { jobPosting } });
  };

  if (loading) return <p className="text-center mt-10">Loading job positions...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  if (jobPostings.length === 0)
    return <p className="text-center mt-10">No job positions found. Please add a job description.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Your Job Positions</h1>
        <ul>
          {jobPostings.map((job, index) => (
            <li
              key={index}
              className="border p-4 rounded mb-2 cursor-pointer hover:bg-gray-50"
              onClick={() => handleJobPositionClick(job)}
            >
              <h2 className="text-xl font-semibold">{job.position}</h2>
              <p className="text-sm text-gray-600">Company: {job.username}</p>
              <p className="text-sm text-gray-600">Vacancy Count: {job.topCandidates || 'Not specified'}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/recruiter/add-job-desc', { state: { currentJobPosting: {} } })}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Add New Job Description
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterJobPositions;
