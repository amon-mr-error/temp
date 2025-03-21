import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('candidate'); // 'candidate' or 'recruiter'
  const [formData, setFormData] = useState({
    number: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (userType === 'candidate') {
        const payload = { number: formData.number, password: formData.password };
        const res = await api.post('/login_candidate', payload);
        if (res.data && res.data.message) {
          // Navigate to candidate dashboard using the first candidate record returned
          navigate('/candidate/dashboard', { state: { candidate: res.data.candidates[0] } });
        }
      } else if (userType === 'recruiter') {
        const payload = { username: formData.username, password: formData.password };
        const res = await api.post('/login_jd', payload);
        if (res.data && res.data.message) {
          // Navigate to recruiter dashboard using the first job posting returned
          navigate('/recruiter/job-positions', { state: { username: formData.username, password: formData.password } });        }
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        <div className="mb-4 flex justify-center">
          <label className="mr-4">
            <input type="radio" value="candidate" checked={userType === 'candidate'} onChange={handleUserTypeChange} className="mr-2" />
            Candidate
          </label>
          <label>
            <input type="radio" value="recruiter" checked={userType === 'recruiter'} onChange={handleUserTypeChange} className="mr-2" />
            Recruiter
          </label>
        </div>
        {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {userType === 'candidate' ? (
            <div>
              <label className="block font-medium">Phone Number</label>
              <input type="text" name="number" onChange={handleChange} required className="w-full p-2 border rounded" />
            </div>
          ) : (
            <div>
              <label className="block font-medium">Username</label>
              <input type="text" name="username" onChange={handleChange} required className="w-full p-2 border rounded" />
            </div>
          )}
          <div>
            <label className="block font-medium">Password</label>
            <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg transition">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
