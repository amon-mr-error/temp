import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const UniversityReport = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    university: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Sending {username, password} as expected by backend (using university name as username if needed)
      const payload = {
        username: formData.university,
        password: formData.password,
      };
      const res = await api.post('/uni_report', payload);
      if (res.data && res.data.message) {
        alert("University report generated successfully");
        navigate('/university/dashboard', { state: { report: res.data } });
      }
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Report generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">University Report</h2>
        {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">University Name</label>
            <input type="text" name="university" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium">Username</label>
            <input type="text" name="username" onChange={handleChange} required className="w-full p-2 border rounded" placeholder="Enter your username" />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
            {loading ? 'Processing...' : 'Proceed'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UniversityReport;
