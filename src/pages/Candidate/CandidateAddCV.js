// src/pages/Candidate/CandidateAddCV.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { fileToText } from '../../utils/fileToText';

const CandidateAddCV = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    number: '',
    password: '',
    position: '',
    cvFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const positionsOptions = ['Data Scientist', 'Marketing Executive', 'Full Stack Developer', 'Senior Developer'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePositionChange = (e) => {
    setFormData(prev => ({ ...prev, position: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cvFile: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cvFile) {
      setError('Please upload your CV file.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const cvText = await fileToText(formData.cvFile);
      const payload = {
        number: formData.number,
        password: formData.password,
        position: formData.position,
        cv: cvText,
      };
      const res = await api.post('/add_candidate_cv', payload);
      if (res.data && res.data.message) {
        alert(res.data.message);
        navigate('/candidate/dashboard', { state: { candidate: res.data.candidate } });
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
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Add CV for New Position</h2>
        {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Phone Number</label>
            <input type="text" name="number" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Select Position</label>
            <select name="position" onChange={handlePositionChange} required className="w-full p-2 border rounded">
              <option value="">Select Position</option>
              {positionsOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium">Upload CV</label>
            <input type="file" onChange={handleFileChange} accept=".txt,.pdf,.doc,.docx" required className="w-full" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateAddCV;
