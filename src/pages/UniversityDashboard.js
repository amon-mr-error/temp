// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const UniversityDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const report = location.state?.report;

//   // Check if report and candidates exist
//   if (!report || !report.candidates || report.candidates.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <p className="text-lg text-gray-700">No student job profiles found.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Group candidates by job position
//   const jobProfiles = report.candidates.reduce((acc, candidate) => {
//     const pos = candidate.position;
//     if (!acc[pos]) {
//       acc[pos] = [];
//     }
//     acc[pos].push(candidate);
//     return acc;
//   }, {});

//   const handlePositionClick = (position) => {
//     const students = jobProfiles[position];
//     navigate('/university/students', {
//       state: { position, students, username: report.username || "University" },
//     });
//   };

//   const handleSignOut = () => {
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {/* Header */}
//       <header className="bg-white shadow-sm mb-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-600">University Dashboard</h1>
//             <p className="text-sm text-gray-600">Welcome, {report.username || "University"}</p>
//           </div>
//           <button
//             onClick={handleSignOut}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Sign Out
//           </button>
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Positions</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {Object.keys(jobProfiles).map((position) => (
//             <div
//               key={position}
//               className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer"
//               onClick={() => handlePositionClick(position)}
//             >
//               <h3 className="text-xl font-bold text-gray-900 capitalize">{position}</h3>
//               <p className="mt-2 text-sm text-gray-600">
//                 {jobProfiles[position].length} student(s) applied.
//               </p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UniversityDashboard;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UniversityDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const report = location.state?.report;

  // Check if report and candidates exist
  if (!report || !report.candidates || report.candidates.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-blue-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xl font-medium text-gray-700">No student job profiles found.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition duration-200 ease-in-out shadow-md"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Group candidates by job position
  const jobProfiles = report.candidates.reduce((acc, candidate) => {
    const pos = candidate.position;
    if (!acc[pos]) {
      acc[pos] = [];
    }
    acc[pos].push(candidate);
    return acc;
  }, {});

  const handlePositionClick = (position) => {
    const students = jobProfiles[position];
    navigate('/university/students', {
      state: { position, students, username: report.username || "" },
    });
  };

  const handleSignOut = () => {
    navigate('/');
  };

  // Get color based on position name for variety
  const getPositionColor = (position) => {
    const colors = [
      'from-blue-500 to-indigo-600',
      'from-purple-500 to-pink-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-red-600',
      'from-indigo-500 to-purple-600'
    ];
    
    // Generate a consistent index based on the position string
    const index = position.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">University Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome <span className="font-semibold">{report.candidates[0].University || "University"}</span></p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 flex items-center gap-2 transform hover:scale-105 transition shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Available Job Positions
          </h2>
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium text-sm">
            {Object.keys(jobProfiles).length} Positions Available
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(jobProfiles).map((position) => (
            <div
              key={position}
              onClick={() => handlePositionClick(position)}
              className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${getPositionColor(position)}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 capitalize">{position}</h3>
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
                    {jobProfiles[position].length}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {jobProfiles[position].length} student{jobProfiles[position].length !== 1 ? 's' : ''} applied for this position.
                </p>
                <div className="flex -space-x-2 overflow-hidden">
                  {jobProfiles[position].slice(0, 5).map((student, index) => (
                    <div key={index} className="inline-block h-8 w-8 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      {student.name ? student.name.charAt(0).toUpperCase() : "S"}
                    </div>
                  ))}
                  {jobProfiles[position].length > 5 && (
                    <div className="inline-block h-8 w-8 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center text-xs font-bold border-2 border-white">
                      +{jobProfiles[position].length - 5}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UniversityDashboard;