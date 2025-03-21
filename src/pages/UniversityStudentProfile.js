// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const UniversityStudentProfile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { candidate, position } = location.state || {};

//   if (!candidate) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <p className="text-lg">No candidate details available.</p>
//       </div>
//     );
//   }

//   const handleBack = () => {
//     navigate(-1);
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
//             <h1 className="text-3xl font-bold text-blue-600">Candidate Profile</h1>
//             <p className="text-sm text-gray-600">Position Applied: {position}</p>
//           </div>
//           <div className="space-x-4">
//             <button
//               onClick={handleBack}
//               className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleSignOut}
//               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             >
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </header>
      
//       <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column: Basic Info */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Name</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900">{candidate.Name}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">University</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900">{candidate.University}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Phone Number</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900">{candidate.number || "Not available"}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Role Applied</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900 capitalize">{candidate.position}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">ATS Score</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900">{candidate.ats}</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Overall Similarity</h3>
//               <p className="mt-1 text-xl font-semibold text-gray-900">{candidate.overall_similarity || 0}</p>
//             </div>
//           </div>
//           {/* Right Column: Detailed Information */}
//           <div className="space-y-6">
//             {candidate.skills && candidate.skills.text && (
//               <div>
//                 <h3 className="text-lg font-medium text-gray-500">Skills</h3>
//                 <div className="mt-1 flex flex-wrap gap-2">
//                   {candidate.skills.text.split(',').map((skill, index) => (
//                     <span key={index} className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
//                       {skill.trim()}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {candidate.education && candidate.education.text && (
//               <div>
//                 <h3 className="text-lg font-medium text-gray-500">Education</h3>
//                 <p className="mt-1 text-gray-900 whitespace-pre-line">{candidate.education.text}</p>
//               </div>
//             )}
//             {candidate.experience && candidate.experience.text && (
//               <div>
//                 <h3 className="text-lg font-medium text-gray-500">Experience</h3>
//                 <p className="mt-1 text-gray-900 whitespace-pre-line">{candidate.experience.text}</p>
//               </div>
//             )}
//             {candidate.responsibilities && candidate.responsibilities.text && (
//               <div>
//                 <h3 className="text-lg font-medium text-gray-500">Responsibilities</h3>
//                 <p className="mt-1 text-gray-900 whitespace-pre-line">{candidate.responsibilities.text}</p>
//               </div>
//             )}
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Similarity Scores</h3>
//               <p className="mt-1 text-gray-900">
//                 {(candidate.similarityScores && candidate.similarityScores.length > 0)
//                   ? candidate.similarityScores.join(', ')
//                   : 'Application Submission Pending'}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Offers Available</h3>
//               <p className="mt-1 text-gray-900">
//                 {(candidate.offers_available && candidate.offers_available.length > 0)
//                   ? JSON.stringify(candidate.offers_available)
//                   : 'Application Submission Pending'}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-500">Rejected From</h3>
//               <p className="mt-1 text-gray-900">
//                 {(candidate.rejected_from && candidate.rejected_from.length > 0)
//                   ? JSON.stringify(candidate.rejected_from)
//                   : 'Application Submission Pending'}
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UniversityStudentProfile;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UniversityStudentProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { candidate, position } = location.state || {};

  if (!candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-xl font-medium text-gray-800">No candidate details available.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  // Calculate a color based on score for visual indicators
  const getScoreColor = (score) => {
    const numScore = parseFloat(score);
    if (numScore >= 85) return "bg-green-100 text-green-800";
    if (numScore >= 70) return "bg-blue-100 text-blue-800";
    if (numScore >= 50) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      {/* Header with glass effect */}
      <header className="bg-white bg-opacity-80 backdrop-blur-sm shadow-md rounded-xl mb-6 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-center py-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Candidate Profile
            </h1>
            <p className="text-sm text-gray-600 mt-1">Position Applied: <span className="font-medium">{position}</span></p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg transition-all hover:bg-indigo-700 hover:shadow-md focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            >
              Back
            </button>
            <button
              onClick={handleSignOut}
              className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg transition-all hover:from-red-600 hover:to-pink-600 hover:shadow-md focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Profile header banner */}
        <div className="h-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Basic Info */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Basic Information</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{candidate.Name}</p>
                <p className="text-lg font-medium text-indigo-600">{candidate.University}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                  <p className="text-gray-900 font-medium">{candidate.number || "Not available"}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-500">Role Applied</h3>
                  <p className="text-gray-900 font-medium capitalize">{candidate.position}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-500">ATS Score</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(candidate.ats)}`}>
                    {candidate.ats}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-500">Overall Similarity</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(candidate.overall_similarity || 0)}`}>
                    {candidate.overall_similarity || 0}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Detailed Information */}
            <div className="space-y-6">
              {candidate.skills && candidate.skills.text && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.text.split(',').map((skill, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {candidate.education && candidate.education.text && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Education</h3>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-800 whitespace-pre-line">{candidate.education.text}</p>
                  </div>
                </div>
              )}
              
              {candidate.experience && candidate.experience.text && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Experience</h3>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-800 whitespace-pre-line">{candidate.experience.text}</p>
                  </div>
                </div>
              )}
              
              {candidate.responsibilities && candidate.responsibilities.text && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Responsibilities</h3>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-800 whitespace-pre-line">{candidate.responsibilities.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Application Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="text-sm font-medium text-blue-700 mb-2">Similarity Scores</h4>
                <p className="text-gray-800 text-sm">
                  {(candidate.similarityScores && candidate.similarityScores.length > 0)
                    ? candidate.similarityScores.join(', ')
                    : 'Application Submission Pending'}
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-sm font-medium text-green-700 mb-2">Offers Available</h4>
                <p className="text-gray-800 text-sm">
                  {(candidate.offers_available && candidate.offers_available.length > 0)
                    ? JSON.stringify(candidate.offers_available)
                    : 'Application Submission Pending'}
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="text-sm font-medium text-red-700 mb-2">Rejected From</h4>
                <p className="text-gray-800 text-sm">
                  {(candidate.rejected_from && candidate.rejected_from.length > 0)
                    ? JSON.stringify(candidate.rejected_from)
                    : 'Application Submission Pending'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UniversityStudentProfile;