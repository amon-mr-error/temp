// src/pages/Recruiter/RecruiterAddJobDescription.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api';
import { fileToText } from '../../utils/fileToText';

const RecruiterAddJobDescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentJobPosting = location.state?.currentJobPosting || {};
  const [formData, setFormData] = useState({
    username: currentJobPosting.username || '',
    password: '',
    salary: currentJobPosting.Salary || '',
    position: currentJobPosting.position || '',
    vacancyCount: '',
    jobDescFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const positionsOptions = ['Data Scientist', 'Marketing Executive', 'Full Stack Developer', 'Senior Developer'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, jobDescFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.jobDescFile) {
      setError('Please upload a Job Description file.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const jobDescText = await fileToText(formData.jobDescFile);
      const payload = {
        username: formData.username,
        password: formData.password,
        salary: formData.salary,
        position: formData.position,
        job_description: jobDescText,
        topCandidates: formData.vacancyCount,
      };
      const res = await api.post('/add_job_description_cv', payload);
      if (res.data && res.data.message) {
        alert(res.data.message);
        navigate('/recruiter/dashboard', { state: { jobPosting: res.data.job_posting } });
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Add Job Description for New Position</h2>
        {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Company Name</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Salary Range</label>
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="e.g. 100000-150000" />
          </div>
          <div>
            <label className="block font-medium">Job Position</label>
            <select name="position" value={formData.position} onChange={handleChange} required className="w-full p-2 border rounded">
              <option value="">Select Position</option>
              {positionsOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Open Vacancy Count</label>
            <input type="number" name="vacancyCount" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Upload Job Description</label>
            <input type="file" onChange={handleFileChange} accept=".txt,.pdf,.doc,.docx" required className="w-full" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterAddJobDescription;
