// // src/pages/Candidate/CandidateFeedback.js
// import React, { useState } from 'react';
// import api from '../../api';

// const CandidateFeedback = ({ candidate }) => {
//   const [loading, setLoading] = useState(false);
//   const [feedbackResults, setFeedbackResults] = useState(null);
//   const [password, setPassword] = useState(''); // Candidate enters password here
//   const [manualId, setManualId] = useState(''); // If candidate identifier is missing

//   const getFeedback = async () => {
//     // Check for password
//     if (!password) {
//       alert('Please enter your password');
//       return;
//     }

//     // Determine candidate identifier from candidate.number or candidate.candidateId;
//     // if neither exists, use manualId input.
//     const candidateIdentifier =
//       candidate.number || candidate.candidateId || manualId;

//     if (!candidateIdentifier) {
//       alert('Candidate identifier is missing. Please enter your candidate ID.');
//       return;
//     }

//     // Build payload
//     const payload = {
//       number: candidateIdentifier.toString(),
//       password: password,
//     };
//     console.log('Feedback payload:', payload);

//     setLoading(true);
//     try {
//       const res = await api.post('/feedback', payload);
//       if (res.data && res.data.message) {
//         setFeedbackResults(res.data.feedback);
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.error || 'Error fetching feedback');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Determine if we need manual candidate ID input (if both candidate.number and candidate.candidateId are falsy)
//   const requireManualId = !candidate.number && !candidate.candidateId;

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold text-gray-800">Feedback</h2>
      
//       {requireManualId && (
//         <div>
//           <label className="block font-medium">Candidate ID:</label>
//           <input
//             type="text"
//             value={manualId}
//             onChange={(e) => setManualId(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Enter your candidate ID"
//           />
//         </div>
//       )}
      
//       <div>
//         <label className="block font-medium">Re-enter Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded"
//           placeholder="Enter your password"
//         />
//       </div>
//       <button
//         onClick={getFeedback}
//         disabled={loading}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         {loading ? 'Fetching Feedback...' : 'Get Feedback'}
//       </button>
//       {feedbackResults && (
//         <div className="mt-4 p-4 bg-gray-50 rounded shadow">
//           {Object.entries(feedbackResults).map(([position, data]) => (
//             <div key={position} className="mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">Position: {position}</h3>
//               <p className="text-gray-700 whitespace-pre-line">{data.feedback}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CandidateFeedback;


import React, { useState } from 'react';
import api from '../../api';

const CandidateFeedback = ({ candidate }) => {
  const [loading, setLoading] = useState(false);
  const [feedbackResults, setFeedbackResults] = useState(null);
  const [password, setPassword] = useState(''); // Candidate enters password here
  const [manualId, setManualId] = useState(''); // If candidate identifier is missing

  const getFeedback = async () => {
    // Check for password
    if (!password) {
      alert('Please enter your password');
      return;
    }

    // Determine candidate identifier from candidate.number or candidate.candidateId;
    // if neither exists, use manualId input.
    const candidateIdentifier = 
      candidate.number || candidate.candidateId || manualId;

    if (!candidateIdentifier) {
      alert('Candidate identifier is missing. Please enter your candidate ID.');
      return;
    }

    // Build payload
    const payload = {
      number: candidateIdentifier.toString(),
      password: password,
    };

    console.log('Feedback payload:', payload);
    setLoading(true);

    try {
      const res = await api.post('/feedback', payload);
      if (res.data && res.data.message) {
        setFeedbackResults(res.data.feedback);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Error fetching feedback');
    } finally {
      setLoading(false);
    }
  };

  // Determine if we need manual candidate ID input (if both candidate.number and candidate.candidateId are falsy)
  const requireManualId = !candidate.number && !candidate.candidateId;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
        Your Feedback Report
      </h2>
      
      <div className="bg-gray-50 p-5 rounded-lg mb-6 border border-gray-100">
        {requireManualId && (
          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-2">Candidate ID:</label>
            <div className="relative">
              <input
                type="text"
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="Enter your candidate ID"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2">Re-enter Password:</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              placeholder="Enter your password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
        </div>
        
        <button
          onClick={getFeedback}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-md hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transform transition-all duration-200 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Fetching Feedback...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Get Feedback
            </span>
          )}
        </button>
      </div>

      {feedbackResults && (
        <div className="mt-6 animate-fade-in">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Feedback Results</h3>
          <div className="space-y-6">
            {Object.entries(feedbackResults).map(([position, data]) => (
              <div key={position} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                  Position: <span className="text-green-600">{position}</span>
                </h4>
                
                {/* Parse the feedback text for bullet points */}
                {data.feedback.split('-').map((point, index) => {
                  // Skip the first empty item if the string starts with '-'
                  if (index === 0 && !point.trim()) return null;
                  
                  // Extract category and content if they exist
                  const matches = point.match(/^\s*\*\*([^:]+):\*\*(.+)$/);
                  
                  if (matches) {
                    // If it has a category heading (like "Skills:")
                    const category = matches[1].trim();
                    const content = matches[2].trim();
                    return (
                      <div key={index} className="mb-4">
                        <h5 className="text-md font-semibold text-green-700 mb-2">{category}</h5>
                        <p className="text-gray-700 pl-1">{content}</p>
                      </div>
                    );
                  } else if (point.trim()) {
                    // Regular bullet point without category
                    return (
                      <div key={index} className="flex items-start mb-3">
                        <div className="text-green-500 mr-2 mt-1">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{point.trim()}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CandidateFeedback;