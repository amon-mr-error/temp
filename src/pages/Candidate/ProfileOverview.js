// import React from 'react';

// const ProfileOverview = ({ candidate }) => {
//   // Format skills for display
//   const skills =
//     candidate.skills && candidate.skills.text
//       ? candidate.skills.text.split(',').map((skill) => skill.trim())
//       : [];

//   return (
//     <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
//         <h2 className="text-white text-xl font-bold">Candidate Profile</h2>
//       </div>
      
//       <div className="p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Column: Basic Info */}
//           <div className="space-y-6">
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Information</h3>
//               <div className="grid grid-cols-1 gap-4">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
//                   <p className="text-base font-semibold text-gray-900">{candidate.Name}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">University</h4>
//                   <p className="text-base font-semibold text-gray-900">{candidate.University}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Contact Number</h4>
//                   <p className="text-base font-semibold text-gray-900">{candidate.number || "Not provided"}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Role Applied</h4>
//                   <p className="text-base font-semibold text-gray-900 capitalize">{candidate.position}</p>
//                 </div>
//               </div>
//             </div>
            
//             {candidate.education && candidate.education.text && (
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-3">
//                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                   <h3 className="text-lg font-bold text-gray-900">Education</h3>
//                 </div>
//                 <p className="text-gray-700 whitespace-pre-line">{candidate.education.text}</p>
//               </div>
//             )}
//           </div>
          
//           {/* Right Column: Skills & Experience */}
//           <div className="space-y-6">
//             {skills.length > 0 && (
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-3">
//                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                   <h3 className="text-lg font-bold text-gray-900">Skills</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.map((skill, index) => (
//                     <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {candidate.experience && candidate.experience.text && (
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-3">
//                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <h3 className="text-lg font-bold text-gray-900">Experience</h3>
//                 </div>
//                 <p className="text-gray-700 whitespace-pre-line">{candidate.experience.text}</p>
//               </div>
//             )}
            
//             {candidate.responsibilities && candidate.responsibilities.text && (
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-3">
//                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                   <h3 className="text-lg font-bold text-gray-900">Responsibilities</h3>
//                 </div>
//                 <p className="text-gray-700 whitespace-pre-line">{candidate.responsibilities.text}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileOverview;


  // import React from 'react';

  // const ProfileOverview = ({ candidate }) => {
  //   // Format skills for display
  //   const skills =
  //     candidate.skills && candidate.skills.text
  //       ? candidate.skills.text.split(',').map((skill) => skill.trim())
  //       : [];

  //   return (
  //     <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
  //       {/* Header with gradient and improved styling */}
  //       <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-8 py-6 relative">
  //         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
  //         <h2 className="text-white text-2xl font-bold tracking-tight">Candidate Profile</h2>
  //         <p className="text-blue-100 mt-1 font-medium">{candidate.position && `${candidate.position.charAt(0).toUpperCase() + candidate.position.slice(1)} Position`}</p>
  //       </div>
        
  //       <div className="p-8">
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //           {/* Left Column: Basic Info */}
  //           <div className="space-y-6">
  //             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition-all duration-300 hover:shadow-md">
  //               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
  //                 <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  //                 </svg>
  //                 Personal Information
  //               </h3>
  //               <div className="grid grid-cols-1 gap-5">
  //                 <div className="transition-all duration-200 hover:translate-x-1">
  //                   <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Full Name</h4>
  //                   <p className="text-base font-semibold text-gray-900 mt-1">{candidate.Name || "Not provided"}</p>
  //                 </div>
  //                 <div className="transition-all duration-200 hover:translate-x-1">
  //                   <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">University</h4>
  //                   <p className="text-base font-semibold text-gray-900 mt-1">{candidate.University || "Not provided"}</p>
  //                 </div>
  //                 <div className="transition-all duration-200 hover:translate-x-1">
  //                   <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Contact Number</h4>
  //                   <p className="text-base font-semibold text-gray-900 mt-1">{candidate.number || "Not provided"}</p>
  //                 </div>
  //                 <div className="transition-all duration-200 hover:translate-x-1">
  //                   <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Role Applied</h4>
  //                   <p className="text-base font-semibold text-gray-900 mt-1 capitalize">{candidate.position || "Not specified"}</p>
  //                 </div>
  //               </div>
  //             </div>
              
  //             {candidate.education && candidate.education.text && (
  //               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
  //                 <div className="flex items-center mb-4">
  //                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  //                   </svg>
  //                   <h3 className="text-lg font-bold text-gray-900">Education</h3>
  //                 </div>
  //                 <div className="border-l-2 border-blue-200 pl-4 ml-1">
  //                   <p className="text-gray-700 whitespace-pre-line leading-relaxed">{candidate.education.text}</p>
  //                 </div>
  //               </div>
  //             )}
              
  //             {candidate.experience && candidate.experience.text && (
  //               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
  //                 <div className="flex items-center mb-4">
  //                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //                   </svg>
  //                   <h3 className="text-lg font-bold text-gray-900">Professional Experience</h3>
  //                 </div>
  //                 <div className="border-l-2 border-blue-200 pl-4 ml-1">
  //                   <p className="text-gray-700 whitespace-pre-line leading-relaxed">{candidate.experience.text}</p>
  //                 </div>
  //               </div>
  //             )}            
  //           </div>
            
  //           {/* Right Column: Skills & Experience */}
  //           <div className="space-y-6">
  //             {skills.length > 0 && (
  //               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
  //                 <div className="flex items-center mb-4">
  //                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  //                   </svg>
  //                   <h3 className="text-lg font-bold text-gray-900">Skills & Expertise</h3>
  //                 </div>
  //                 <div className="flex flex-wrap gap-2">
  //                   {skills.map((skill, index) => (
  //                     <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transition-all duration-300 hover:bg-blue-200 border border-blue-200 shadow-sm">
  //                       {skill}
  //                     </span>
  //                   ))}
  //                 </div>
  //               </div>
  //             )}
              

              
  //             {candidate.responsibilities && candidate.responsibilities.text && (
  //               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
  //                 <div className="flex items-center mb-4">
  //                   <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  //                   </svg>
  //                   <h3 className="text-lg font-bold text-gray-900">Key Responsibilities</h3>
  //                 </div>
  //                 <div className="border-l-2 border-blue-200 pl-4 ml-1">
  //                   <p className="text-gray-700 whitespace-pre-line leading-relaxed">{candidate.responsibilities.text}</p>
  //                 </div>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
        
  //       {/* Footer with subtle branding */}
  //       <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
  //         <div className="flex justify-between items-center">
  //           <p className="text-sm text-gray-500">© {new Date().getFullYear()} Recruitment Portal</p>
  //           <div className="flex items-center gap-4">
  //             <span className="h-2 w-2 rounded-full bg-blue-600"></span>
  //             <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
  //             <span className="h-2 w-2 rounded-full bg-purple-600"></span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default ProfileOverview;

  import React from 'react';

  const ProfileOverview = ({ candidate }) => {
    console.log(candidate);
    // Safely handle potentially malformed data from Mistral AI
    const formatText = (text) => {
      if (!text) return "";
      // Handle special characters and formatting issues
      return text
        .replace(/\\n/g, "\n") // Replace escaped newlines
        .replace(/\\"/g, '"') // Replace escaped quotes
        .trim();
    };
  
    // Safely parse and format skills
    const formatSkills = (skillsData) => {
      if (!skillsData) return [];
      if (typeof skillsData === 'string') {
        return skillsData.split(',').map(skill => skill.trim()).filter(Boolean);
      }
      if (skillsData.text) {
        return formatText(skillsData.text).split(',').map(skill => skill.trim()).filter(Boolean);
      }
      return [];
    };
  
    // Safely get field value with fallback
    const getValue = (field, fallback = "Not provided") => {
      if (!field) return fallback;
      return typeof field === 'object' && field.text ? formatText(field.text) : formatText(String(field));
    };
  
    // Format position title with proper capitalization
    const formatPosition = (position) => {
      if (!position) return "";
      return position
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    };
  
    // Parse skills safely
    const skills = formatSkills(candidate.skills);
  
    return (
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
        {/* Header with gradient and improved styling */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-8 py-6 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-tr-full"></div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Candidate Profile</h2>
          <p className="text-blue-100 mt-1 font-medium">
            {candidate.position && `${formatPosition(getValue(candidate.position))} Position`}
          </p>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Basic Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-5">
                  <div className="transition-all duration-200 hover:translate-x-1">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Full Name</h4>
                    <p className="text-base font-semibold text-gray-900 mt-1">{getValue(candidate.Name)}</p>
                  </div>
                  <div className="transition-all duration-200 hover:translate-x-1">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">University</h4>
                    <p className="text-base font-semibold text-gray-900 mt-1">{getValue(candidate.University)}</p>
                  </div>
                  <div className="transition-all duration-200 hover:translate-x-1">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Role Applied</h4>
                    <p className="text-base font-semibold text-gray-900 mt-1 capitalize">{getValue(candidate.position)}</p>
                  </div>
                  <div className="transition-all duration-200 hover:translate-x-1">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Overall Rank</h4>
                    <p className="text-base font-semibold text-gray-900 mt-1 capitalize">{getValue(candidate.overall_rank)}</p>
                  </div>
                </div>
              </div>
              
              {candidate.education && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Education</h3>
                  </div>
                  <div className="border-l-2 border-blue-200 pl-4 ml-1">
                    <div className="prose prose-blue max-w-none">
                      {formatText(getValue(candidate.education)).split('\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {candidate.experience && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Professional Experience</h3>
                  </div>
                  <div className="border-l-2 border-blue-200 pl-4 ml-1">
                    <div className="prose prose-blue max-w-none">
                      {formatText(getValue(candidate.experience)).split('\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}            
            </div>
            
            {/* Right Column: Skills & Experience */}
            <div className="space-y-6">
              {skills.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Skills & Expertise</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 transition-all duration-300 hover:bg-blue-200 border border-blue-200 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {candidate.responsibilities && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Key Responsibilities</h3>
                  </div>
                  <div className="border-l-2 border-blue-200 pl-4 ml-1">
                    <div className="prose prose-blue max-w-none">
                      {formatText(getValue(candidate.responsibilities)).split('\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
  
              {/* Optional Achievements Section if data exists */}
              {candidate.achievements && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-900">Key Achievements</h3>
                  </div>
                  <div className="border-l-2 border-blue-200 pl-4 ml-1">
                    <div className="prose prose-blue max-w-none">
                      {formatText(getValue(candidate.achievements)).split('\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-2">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer with subtle branding and animation */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Recruitment Portal</p>
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse delay-100"></span>
              <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse delay-200"></span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileOverview;