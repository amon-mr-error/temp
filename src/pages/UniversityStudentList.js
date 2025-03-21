import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UniversityStudentList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { position, students, username } = location.state || {};

  if (!position || !students) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg">No students data available.</p>
      </div>
    );
  }

  const handleCandidateClick = (candidate) => {
    navigate('/university/student-profile', { state: { candidate, position } });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <header className="bg-white shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">Students for {position}</h1>
            <p className="text-sm text-gray-600">University: {username}</p>
          </div>
          <div className="space-x-4">
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Back
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {students.length > 0 ? (
          <ul className="space-y-4">
            {students.map((student) => (
              <li
                key={student.candidateId}
                className="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-xl transition"
                onClick={() => handleCandidateClick(student)}
              >
                <h3 className="text-xl font-bold text-gray-900">Candidate ID: {student.candidateId}</h3>
                <p className="text-sm text-gray-600">Name: {student.Name}</p>
                <p className="text-sm text-gray-600 capitalize">Role: {student.position}</p>
                <p className="text-sm text-gray-600">Overall Rank: {student.overall_rank}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-700">No students have applied for this position.</p>
        )}
      </main>
    </div>
  );
};

export default UniversityStudentList;
