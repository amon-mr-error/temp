// src/pages/Candidate/CandidateNotifications.js
import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const CandidateNotifications = ({ candidate }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState(candidate.notifications || []);

  const clearNotifications = async () => {
    setLoading(true);
    try {
      const payload = {
        number: candidate.number,
        password: candidate.Password, // Assuming candidate object includes Password
        position: candidate.position,
      };
      const res = await api.post('/clear_notification', payload);
      if (res.data && res.data.message) {
        // Clear notifications in local state (simulate clearing)
        setNotifications([]);
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Error clearing notifications');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {notifications.map((notif, idx) => (
            <li key={idx} className="p-4 bg-white rounded shadow">
              <p className="text-sm text-gray-700">{notif.message}</p>
              <p className="text-xs text-gray-500">Company: {notif.company_details}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No notifications available.</p>
      )}
      <button
        onClick={clearNotifications}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? 'Clearing...' : 'Clear Notifications'}
      </button>
    </div>
  );
};

export default CandidateNotifications;
