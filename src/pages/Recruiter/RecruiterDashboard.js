
// // src/pages/Recruiter/RecruiterDashboard.js
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import JobDescriptionParser from './JobDescriptionParser'; // Adjust the import path as needed

// const RecruiterDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const jobPosting = location.state?.jobPosting;
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [showFullDetails, setShowFullDetails] = useState(false);

//   if (!jobPosting) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-gray-100">
//           <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//           </svg>
//           <h3 className="mt-4 text-xl font-semibold text-gray-900">No job posting data found</h3>
//           <p className="mt-2 text-sm text-gray-600">Please register or log in to view your dashboard.</p>
//           <button
//             onClick={() => navigate('/')}
//             className="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
//           >
//             Return to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleSignOut = () => {
//     navigate('/');
//   };

//   const handleCandidateClick = (candidate) => {
//     setSelectedCandidate(candidate);
//     setShowFullDetails(false);
//   };

//   const closeCandidateModal = () => {
//     setShowFullDetails(false);
//   };

//   const openFullDetails = () => {
//     setShowFullDetails(true);
//   };

//   // Function to determine badge color based on similarity score
//   const getSimilarityBadgeColor = (score) => {
//     if (score >= 80) return "bg-green-100 text-green-800 border border-green-200";
//     if (score >= 60) return "bg-blue-100 text-blue-800 border border-blue-200";
//     if (score >= 40) return "bg-yellow-100 text-yellow-800 border border-yellow-200";
//     return "bg-red-100 text-red-800 border border-red-200";
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-md border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <svg className="h-9 w-9 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <h1 className="ml-3 text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm font-medium text-gray-700 bg-gray-100 py-1.5 px-3 rounded-full">{jobPosting.username}</span>
//               <button 
//                 onClick={() => navigate('/recruiter/add-job-desc', { state: { currentJobPosting: jobPosting } })}
//                 className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                 </svg>
//                 Add New Job Description
//               </button>
//               <button 
//                 onClick={handleSignOut} 
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
//               >
//                 <svg className="mr-2 -ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                 </svg>
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         {/* Job posting details - Top section */}
//         <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mb-8">
//           <div className="px-6 py-5 bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-xl font-semibold leading-6 text-gray-900">Job Posting Details</h3>
//                 <p className="mt-1 max-w-2xl text-sm text-gray-600">Information about the current job opening.</p>
//               </div>
//               <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
//                 {jobPosting.position}
//               </span>
//             </div>
//           </div>
//           <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Company Name</h4>
//               <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.username}</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Salary Range</h4>
//               <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.Salary}</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Vacancy Count</h4>
//               <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.topCandidates || "Not specified"}</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-medium text-gray-500">Total Candidates</h4>
//               <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.candidates ? jobPosting.candidates.length : 0}</p>
//             </div>
//             <div className="md:col-span-4">
//               <h4 className="text-sm font-medium text-gray-500">Job Description</h4>
//               <JobDescriptionParser jobDescriptionText={jobPosting.job_description} />
//             </div>
//           </div>
//         </div>

//         {/* Candidates section - Split view */}
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Candidates list - Left side */}
//           <div className="md:w-2/5 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
//             <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 flex justify-between items-center">
//               <h3 className="text-lg font-semibold leading-6 text-gray-900">Matched Candidates</h3>
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
//                 {jobPosting.candidates ? jobPosting.candidates.length : 0}
//               </span>
//             </div>
//             <div className="overflow-hidden overflow-y-auto max-h-screen">
//               {jobPosting.candidates && jobPosting.candidates.length > 0 ? (
//                 <ul className="divide-y divide-gray-200">
//                   {jobPosting.candidates.map((candidate) => (
//                     <li 
//                       key={candidate.candidateId}
//                       className={`px-4 py-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer ${selectedCandidate && selectedCandidate.candidateId === candidate.candidateId ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
//                       onClick={() => handleCandidateClick(candidate)}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-sm border border-blue-200">
//                             <span className="text-blue-800 font-semibold">
//                               {candidate.Name ? candidate.Name.substring(0, 2).toUpperCase() : "NA"}
//                             </span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-semibold text-gray-900">{candidate.Name}</div>
//                             <div className="text-xs text-gray-600">{candidate.University}</div>
//                           </div>
//                         </div>
//                         <div className="flex items-center">
//                           <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${getSimilarityBadgeColor(candidate.currentJobSim * 100)}`}>
//                             {(candidate.currentJobSim * 100).toFixed(0)}%
//                           </span>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <div className="text-center py-12">
//                   <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                   <h3 className="mt-2 text-sm font-medium text-gray-900">No candidates found</h3>
//                   <p className="mt-1 text-sm text-gray-500">No candidates match your job requirements yet.</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Candidate preview - Right side */}
//           <div className="md:w-3/5 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
//             {selectedCandidate ? (
//               <>
//                 <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-indigo-100 border-b border-indigo-200">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-sm border border-indigo-200 mr-4">
//                         <span className="text-indigo-800 font-semibold">
//                           {selectedCandidate.Name ? selectedCandidate.Name.substring(0, 2).toUpperCase() : "NA"}
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900">{selectedCandidate.Name}</h3>
//                         <p className="text-sm text-gray-600">{selectedCandidate.University}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSimilarityBadgeColor(selectedCandidate.currentJobSim * 100)}`}>
//                         {(selectedCandidate.currentJobSim * 100).toFixed(0)}% match
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-6 py-4">
//                   {/* Skills section */}
//                   {selectedCandidate.skills && selectedCandidate.skills.text && (
//                     <div className="mb-6">
//                       <h4 className="text-sm font-medium text-gray-500 mb-3">Skills</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {selectedCandidate.skills.text.split(',').map((skill, index) => (
//                           <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-200">
//                             {skill.trim()}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Contact info - just a preview */}
//                   <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Contact</h4>
//                       <p className="text-sm font-medium text-gray-900">{selectedCandidate.candidateId || "Not available"}</p>
//                     </div>
//                     {selectedCandidate.ats && (
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-500">Score</h4>
//                         <span className="text-sm font-medium text-gray-900 bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200">{selectedCandidate.ats}</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex justify-end mt-6 space-x-3">
//                     <button 
//                       className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200 font-medium"
//                       onClick={() => setSelectedCandidate(null)}
//                     >
//                       Close
//                     </button>
//                     <button 
//                       className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg shadow-sm hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 font-medium"
//                       onClick={openFullDetails}
//                     >
//                       View Full Details
//                     </button>
//                     <button
//                       className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg shadow-sm hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium flex items-center"
//                       onClick={() => {
//                         alert(`Contact initiated with ${selectedCandidate.Name}`);
//                       }}
//                     >
//                       <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                       Contact
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="flex flex-col items-center justify-center h-64 p-6 text-center">
//                 <svg className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <h3 className="text-lg font-medium text-gray-900 mb-1">No Candidate Selected</h3>
//                 <p className="text-sm text-gray-500">Select a candidate from the list to view their details</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Full Candidate Detail Modal - Sexy popup */}
//       {showFullDetails && selectedCandidate && (
//         <div className="fixed z-10 inset-0 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
//             <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-gray-100 animate-fadeIn">
//               <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-5">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-14 w-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg border border-white border-opacity-30 mr-4">
//                       <span className="text-white font-bold text-xl">
//                         {selectedCandidate.Name ? selectedCandidate.Name.substring(0, 2).toUpperCase() : "NA"}
//                       </span>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-bold text-white">{selectedCandidate.Name}</h2>
//                       <p className="text-indigo-100">{selectedCandidate.University}</p>
//                     </div>
//                   </div>
//                   <div>
//                     <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-white text-indigo-700">
//                       {(selectedCandidate.currentJobSim * 100).toFixed(0)}% Match
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="max-h-96 overflow-y-auto p-6 bg-gray-50">
//                 <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
//                     <span className="text-sm font-medium text-gray-500">ID: #{selectedCandidate.candidateId}</span>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Email</h4>
//                       <p className="text-sm font-medium text-gray-900">candidate@example.com</p>
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-500">Phone</h4>
//                       <p className="text-sm font-medium text-gray-900">{selectedCandidate.number || "Not available"}</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {selectedCandidate.skills && selectedCandidate.skills.text && (
//                   <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedCandidate.skills.text.split(',').map((skill, index) => (
//                         <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-200">
//                           {skill.trim()}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}
                
//                 {selectedCandidate.education && selectedCandidate.education.text && (
//                   <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
//                     <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.education.text}</p>
//                   </div>
//                 )}
                
//                 {selectedCandidate.experience && selectedCandidate.experience.text && (
//                   <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
//                     <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.experience.text}</p>
//                   </div>
//                 )}
                
//                 {selectedCandidate.responsibilities && selectedCandidate.responsibilities.text && (
//                   <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
//                     <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.responsibilities.text}</p>
//                   </div>
//                 )}
                
//                 {selectedCandidate.ats && (
//                   <div className="bg-white rounded-xl shadow-sm p-6">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Scores</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-500">ATS Score</h4>
//                         <span className="inline-block mt-1 px-3 py-1 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200 font-medium">
//                           {selectedCandidate.ats}
//                         </span>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-medium text-gray-500">Match Percentage</h4>
//                         <span className={`inline-block mt-1 px-3 py-1 rounded-lg font-medium ${getSimilarityBadgeColor(selectedCandidate.currentJobSim * 100)}`}>
//                           {(selectedCandidate.currentJobSim * 100).toFixed(0)}%
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <div className="bg-white px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
//                 <button
//                   type="button"
//                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-all duration-200"
//                   onClick={closeCandidateModal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium transition-all duration-200 flex items-center"
//                   onClick={() => {
//                     alert(`Contact initiated with ${selectedCandidate.Name}`);
//                     closeCandidateModal();
//                   }}
//                 >
//                   <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   Contact Candidate
//                 </button>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 font-medium transition-all duration-200"
//                   onClick={() => {
//                     alert(`${selectedCandidate.Name} shortlisted for interview`);
//                     closeCandidateModal();
//                   }}
//                 >
//                   Shortlist for Interview
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecruiterDashboard;

// src/pages/Recruiter/RecruiterDashboard.js
// src/pages/Recruiter/RecruiterDashboard.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../api';
import JobDescriptionParser from './JobDescriptionParser'; // Adjust the import path as needed

const RecruiterDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialJobPosting = location.state?.jobPosting || null;
  const [jobPosting, setJobPosting] = useState(initialJobPosting);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Function to refresh dashboard data (via /login_jd)
  const refreshDashboard = async () => {
    if (!jobPosting || !jobPosting.username || !jobPosting.Password) return;
    setRefreshing(true);
    try {
      const res = await api.post('/login_jd', {
        username: jobPosting.username,
        password: jobPosting.Password,
      });
      if (res.data && res.data.message && res.data.job_postings.length > 0) {
        setJobPosting(res.data.job_postings[0]);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error refreshing dashboard:", error);
      alert(error.response?.data?.error || "Error refreshing dashboard.");
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!jobPosting) {
      navigate('/login');
    }
  }, [jobPosting, navigate]);

  if (!jobPosting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-gray-100">
          <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">No job posting data found</h3>
          <p className="mt-2 text-sm text-gray-600">Please register or log in to view your dashboard.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleSignOut = () => {
    navigate('/');
  };

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowFullDetails(false);
  };

  const closeCandidateModal = () => {
    setShowFullDetails(false);
  };

  const openFullDetails = () => {
    setShowFullDetails(true);
  };

  // New function: handle recruiter decision (select or reject)
  const handleRecruiterDecision = async (decision) => {
    if (!selectedCandidate) return;
    try {
      const payload = {
        username: jobPosting.username,
        password: jobPosting.Password,
        position: jobPosting.position,
        candidateId: selectedCandidate.candidateId,
        decision, // "select" or "reject"
      };
      const res = await api.post('/recruiter_decision', payload);
      if (res.data && res.data.message) {
        alert(res.data.message);
        // Optionally refresh dashboard data
        refreshDashboard();
        setSelectedCandidate(null);
      }
    } catch (error) {
      console.error("Error processing recruiter decision:", error);
      alert(error.response?.data?.error || "Error processing decision.");
    }
  };

  // Function to determine badge color based on similarity score
  const getSimilarityBadgeColor = (score) => {
    if (score >= 80) return "bg-green-100 text-green-800 border border-green-200";
    if (score >= 60) return "bg-blue-100 text-blue-800 border border-blue-200";
    if (score >= 40) return "bg-yellow-100 text-yellow-800 border border-yellow-200";
    return "bg-red-100 text-red-800 border border-red-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <svg className="h-9 w-9 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700 bg-gray-100 py-1.5 px-3 rounded-full">{jobPosting.username}</span>
              <button 
                onClick={() => navigate('/recruiter/add-job-desc', { state: { currentJobPosting: jobPosting } })}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Job Description
              </button>
              <button 
                onClick={handleSignOut} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
              >
                <svg className="mr-2 -ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Job posting details - Top section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mb-8">
          <div className="px-6 py-5 bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold leading-6 text-gray-900">Job Posting Details</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-600">Information about the current job opening.</p>
              </div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
                {jobPosting.position}
              </span>
            </div>
          </div>
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Company Name</h4>
              <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.username}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Salary Range</h4>
              <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.Salary}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Vacancy Count</h4>
              <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.topCandidates || "Not specified"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Total Candidates</h4>
              <p className="mt-1 text-md text-gray-900 font-medium">{jobPosting.candidate_rankings ? jobPosting.candidate_rankings.length : 0}</p>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-sm font-medium text-gray-500">Job Description</h4>
              <JobDescriptionParser jobDescriptionText={jobPosting.job_description} />
            </div>
          </div>
        </div>

        {/* Candidates section - Split view */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Candidates list - Left side */}
          <div className="md:w-2/5 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">Matched Candidates</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
                {jobPosting.candidate_rankings ? jobPosting.candidate_rankings.length : 0}
              </span>
            </div>
            <div className="overflow-hidden overflow-y-auto max-h-screen">
              {jobPosting.candidate_rankings && jobPosting.candidate_rankings.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {jobPosting.candidate_rankings.map((candidate) => (
                    <li 
                      key={candidate.candidateId}
                      className={`px-4 py-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer ${selectedCandidate && selectedCandidate.candidateId === candidate.candidateId ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
                      onClick={() => handleCandidateClick(candidate)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-sm border border-blue-200">
                            <span className="text-blue-800 font-semibold">
                              {candidate.Name ? candidate.Name.substring(0, 2).toUpperCase() : "NA"}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{candidate.Name}</div>
                            <div className="text-xs text-gray-600">{candidate.University}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${getSimilarityBadgeColor(candidate.currentJobSim * 100)}`}>
                            {(candidate.currentJobSim * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No candidates found</h3>
                  <p className="mt-1 text-sm text-gray-500">No candidates match your job requirements yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Candidate preview - Right side */}
          <div className="md:w-3/5 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
            {selectedCandidate ? (
              <>
                <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-indigo-100 border-b border-indigo-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center shadow-sm border border-indigo-200 mr-4">
                        <span className="text-indigo-800 font-semibold">
                          {selectedCandidate.Name ? selectedCandidate.Name.substring(0, 2).toUpperCase() : "NA"}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{selectedCandidate.Name}</h3>
                        <p className="text-sm text-gray-600">{selectedCandidate.University}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSimilarityBadgeColor(selectedCandidate.currentJobSim * 100)}`}>
                        {(selectedCandidate.currentJobSim * 100).toFixed(0)}% match
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4">
                  {selectedCandidate.skills && selectedCandidate.skills.text && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCandidate.skills.text.split(',').map((skill, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-200">
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                      <p className="text-sm font-medium text-gray-900">{selectedCandidate.candidateId || "Not available"}</p>
                    </div>
                    {selectedCandidate.ats && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Score</h4>
                        <span className="text-sm font-medium text-gray-900 bg-yellow-50 px-2.5 py-1 rounded-md border border-yellow-200">{selectedCandidate.ats}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end mt-6 space-x-3">
                    <button 
                      className="px-5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-200 font-medium"
                      onClick={() => setSelectedCandidate(null)}
                    >
                      Close
                    </button>
                    <button 
                      className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg shadow-sm hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 font-medium"
                      onClick={openFullDetails}
                    >
                      View Full Details
                    </button>
                    <button
                      className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg shadow-sm hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium"
                      onClick={() => handleRecruiterDecision("select")}
                    >
                      Select Candidate
                    </button>
                    <button
                      className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-sm hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium"
                      onClick={() => handleRecruiterDecision("reject")}
                    >
                      Reject Candidate
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 p-6 text-center">
                <svg className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No Candidate Selected</h3>
                <p className="text-sm text-gray-500">Select a candidate from the list to view their details</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Full Candidate Detail Modal */}
      {showFullDetails && selectedCandidate && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-gray-100 animate-fadeIn">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-14 w-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg border border-white border-opacity-30 mr-4">
                      <span className="text-white font-bold text-xl">
                        {selectedCandidate.Name ? selectedCandidate.Name.substring(0, 2).toUpperCase() : "NA"}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{selectedCandidate.Name}</h2>
                      <p className="text-indigo-100">{selectedCandidate.University}</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-white text-indigo-700">
                      {(selectedCandidate.currentJobSim * 100).toFixed(0)}% Match
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="max-h-96 overflow-y-auto p-6 bg-gray-50">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <span className="text-sm font-medium text-gray-500">ID: #{selectedCandidate.candidateId}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <p className="text-sm font-medium text-gray-900">candidate@example.com</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                      <p className="text-sm font-medium text-gray-900">{selectedCandidate.number || "Not available"}</p>
                    </div>
                  </div>
                </div>
                
                {selectedCandidate.skills && selectedCandidate.skills.text && (
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.skills.text.split(',').map((skill, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-800 border border-indigo-200">
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedCandidate.education && selectedCandidate.education.text && (
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                    <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.education.text}</p>
                  </div>
                )}
                
                {selectedCandidate.experience && selectedCandidate.experience.text && (
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
                    <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.experience.text}</p>
                  </div>
                )}
                
                {selectedCandidate.responsibilities && selectedCandidate.responsibilities.text && (
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
                    <p className="text-sm text-gray-900 whitespace-pre-line">{selectedCandidate.responsibilities.text}</p>
                  </div>
                )}
                
                {selectedCandidate.ats && (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Scores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ATS Score</h4>
                        <span className="text-sm font-medium text-gray-900 bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-200 font-medium">
                          {selectedCandidate.ats}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Match Percentage</h4>
                        <span className={`inline-block mt-1 px-3 py-1 rounded-lg font-medium ${getSimilarityBadgeColor(selectedCandidate.currentJobSim * 100)}`}>
                          {(selectedCandidate.currentJobSim * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-all duration-200"
                  onClick={closeCandidateModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium transition-all duration-200 flex items-center"
                  onClick={() => {
                    alert(`Contact initiated with ${selectedCandidate.Name}`);
                    closeCandidateModal();
                  }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Candidate
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium transition-all duration-200"
                  onClick={() => handleRecruiterDecision("select")}
                >
                  Select Candidate
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 font-medium transition-all duration-200"
                  onClick={() => handleRecruiterDecision("reject")}
                >
                  Reject Candidate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterDashboard;
