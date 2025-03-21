// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';
// import { fileToText } from '../../utils/fileToText';

// const CandidateRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//     university: '',
//     salary: '',
//     password: '',
//     positions: [],
//     cvFile: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const positionsOptions = ['Data Scientist', 'Marketing Executive', 'Full Stack Developer', 'Senior Developer'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePositionChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData(prev => {
//       let positions = [...prev.positions];
//       if (checked) {
//         positions.push(value);
//       } else {
//         positions = positions.filter(pos => pos !== value);
//       }
//       return { ...prev, positions };
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({ ...prev, cvFile: e.target.files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.cvFile) {
//       setError('Please upload your CV file.');
//       return;
//     }
//     if (formData.positions.length === 0) {
//       setError('Please select at least one position.');
//       return;
//     }
//     setLoading(true);
//     setError('');
//     try {
//       // Extract text from the uploaded CV file
//       const cvText = await fileToText(formData.cvFile);
//       // Use the first selected position (backend expects a single position)
//       const position = formData.positions[0];

//       const payload = {
//         name: formData.name,
//         number: formData.number,
//         university: formData.university,
//         salary: formData.salary,
//         password: formData.password,
//         position,
//         cv: cvText,
//       };

//       const res = await api.post('/register_candidate', payload);
//       if (res.data && res.data.message) {
//         // Navigate to Candidate Dashboard with the returned candidate data
//         navigate('/candidate/dashboard', { state: { candidate: res.data.candidate } });
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || 'Registration failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Candidate Registration</h2>
//         {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Name</label>
//             <input type="text" name="name" onChange={handleChange} required className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block font-medium">Phone Number</label>
//             <input type="text" name="number" onChange={handleChange} required className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block font-medium">University</label>
//             <input type="text" name="university" onChange={handleChange} required className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block font-medium">Salary Range</label>
//             <input type="text" name="salary" onChange={handleChange} required className="w-full p-2 border rounded" placeholder="e.g. 50000-70000" />
//           </div>
//           <div>
//             <label className="block font-medium">Password</label>
//             <input type="password" name="password" onChange={handleChange} required className="w-full p-2 border rounded" />
//           </div>
//           <div>
//             <label className="block font-medium">Upload CV</label>
//             <input type="file" onChange={handleFileChange} accept=".txt,.pdf,.doc,.docx" required className="w-full" />
//           </div>
//           <div>
//             <label className="block font-medium mb-2">Select Positions (Select one or more)</label>
//             <div className="grid grid-cols-2 gap-2">
//               {positionsOptions.map(option => (
//                 <label key={option} className="flex items-center">
//                   <input type="checkbox" value={option} onChange={handlePositionChange} className="mr-2" />
//                   <span>{option}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CandidateRegister;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { fileToText } from '../../utils/fileToText';
import { motion } from 'framer-motion';
//import PositionSelector from './PositionSelector';

const CandidateRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    university: '',
    salary: '',
    password: '',
    positions: [],
    cvFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [isHovering, setIsHovering] = useState(null);

  const positionsOptions = [
    { id: 'ds', title: 'Data Scientist', icon: '📊' },
    { id: 'me', title: 'Marketing Executive', icon: '📈' },
    { id: 'fsd', title: 'Full Stack Developer', icon: '💻' },
    { id: 'sd', title: 'Senior Developer', icon: '👨‍💻' }
  ];

  const formSections = [
    { title: "Personal Details", icon: "👤" },
    { title: "Professional Info", icon: "🎓" },
    { title: "Career Preferences", icon: "💼" },
  ];

  useEffect(() => {
    // Simulating 3D loading effect
    const loadingTimeout = setTimeout(() => {
      document.querySelector('.form-container').classList.add('loaded');
    }, 300);
    
    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePositionChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      let positions = [...prev.positions];
      if (checked) {
        positions.push(value);
      } else {
        positions = positions.filter(pos => pos !== value);
      }
      return { ...prev, positions };
    });
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
    if (formData.positions.length === 0) {
      setError('Please select at least one position.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Extract text from the uploaded CV file
      const cvText = await fileToText(formData.cvFile);
      // Use the first selected position (backend expects a single position)
      const position = formData.positions[0];

      const payload = {
        name: formData.name,
        number: formData.number,
        university: formData.university,
        salary: formData.salary,
        password: formData.password,
        position,
        cv: cvText,
      };

      const res = await api.post('/register_candidate', payload);
      if (res.data && res.data.message) {
        // Show success animation before navigating
        setLoading(false);
        document.querySelector('.success-animation').classList.add('active');
        setTimeout(() => {
          // Navigate to Candidate Dashboard with the returned candidate data
          navigate('/candidate/dashboard', { state: { candidate: res.data.candidate } });
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Registration failed');
      setLoading(false);
    }
  };

  const nextSection = () => {
    if (currentSection < formSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  //safal recommendation for const thing 
  // Add these state variables near your other useState declarations
const [searchTerm, setSearchTerm] = useState('');
const [dropdownOpen, setDropdownOpen] = useState(false);

// Add this function near your other handler functions
const handlePositionSelect = (option) => {
  setFormData(prev => {
    let positions = [...prev.positions];
    if (positions.includes(option.title)) {
      positions = positions.filter(pos => pos !== option.title);
    } else {
      positions.push(option.title);
    }
    return { ...prev, positions };
  });
  setSearchTerm('');
};

// Add this computed variable near the start of your component, after positionsOptions
const filteredOptions = positionsOptions.filter(option => 
  option.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center p-4 overflow-hidden">
      {/* 3D Floating Particles - Purely decorative */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Success animation overlay */}
      <div className="success-animation">
        <div className="success-icon">✓</div>
        <div className="success-text">Registration Successful!</div>
      </div>
      
      {/* Main card with 3D effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="form-container max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative overflow-hidden border border-white border-opacity-20"
      >
        {/* Glassmorphism card effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-5 pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-2 text-white text-center"
          >
            Candidate Registration
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 w-20 bg-blue-400 mx-auto mb-6 rounded-full"
          ></motion.div>

          {/* Progress tracker */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute h-1 bg-gray-300 top-4 left-0 right-0 z-0"></div>
            <div className="absolute h-1 bg-blue-500 top-4 left-0 right-0 z-0" style={{ width: `${(currentSection / (formSections.length - 1)) * 100}%` }}></div>
            
            {formSections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className={`z-10 flex flex-col items-center ${currentSection >= index ? 'text-blue-400' : 'text-gray-400'}`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentSection >= index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'} mb-2`}>
                  {index + 1}
                </div>
                <span className="text-xs text-center w-20">{section.title}</span>
              </motion.div>
            ))}
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500 bg-opacity-20 text-red-100 p-3 mb-4 rounded-lg border border-red-500 border-opacity-30 flex items-center"
            >
              <span className="text-red-300 mr-2">⚠️</span>
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Personal Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: currentSection === 0 ? 1 : 0, x: currentSection === 0 ? 0 : 20 }}
              className={`space-y-4 transition-all duration-500 ${currentSection === 0 ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">👤</div>
                <h3 className="text-xl font-medium text-white">Personal Details</h3>
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">Phone Number</label>
                <input 
                  type="text" 
                  name="number" 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">Password</label>
                <input 
                  type="password" 
                  name="password" 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  placeholder="••••••••"
                />
              </div>
            </motion.div>
            
            {/* Section 2: Professional Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: currentSection === 1 ? 1 : 0, x: currentSection === 1 ? 0 : 20 }}
              className={`space-y-4 transition-all duration-500 ${currentSection === 1 ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🎓</div>
                <h3 className="text-xl font-medium text-white">Professional Information</h3>
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">University/College</label>
                <input 
                  type="text" 
                  name="university" 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  placeholder="Harvard University"
                />
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">Upload CV/Resume</label>
                <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 text-center relative overflow-hidden group">
                  <input 
                    type="file" 
                    id="cvFile"
                    onChange={handleFileChange} 
                    accept=".txt,.pdf,.doc,.docx" 
                    required 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="text-white flex items-center justify-center flex-col space-y-2">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📄</div>
                    <span className="text-sm text-blue-200">
                      {formData.cvFile ? formData.cvFile.name : "Drag & drop your file or click to browse"}
                    </span>
                    <span className="text-xs text-blue-300">Supports PDF, DOC, DOCX, TXT</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Section 3: Career Preferences */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: currentSection === 2 ? 1 : 0, x: currentSection === 2 ? 0 : 20 }}
              className={`space-y-4 transition-all duration-500 ${currentSection === 2 ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">💼</div>
                <h3 className="text-xl font-medium text-white">Career Preferences</h3>
              </div>
              
              <div className="field-container">
                <label className="block text-blue-200 mb-1 text-sm">Expected Salary Range</label>
                <input 
                  type="text" 
                  name="salary" 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  placeholder="e.g. $50,000-$70,000"
                />
              </div>
              
              // Replace your existing position selection code in the Career Preferences section (Section 3)
// with this code block:

<div className="field-container">
  <label className="block text-blue-200 mb-3 text-sm">Select Positions (Choose one or more)</label>
  <div className="relative">
    <div className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition flex flex-wrap gap-2 min-h-[56px]">
      {formData.positions.map((position, idx) => {
        const option = positionsOptions.find(opt => opt.title === position);
        return (
          <div key={idx} className="bg-blue-600 bg-opacity-30 px-2 py-1 rounded-lg flex items-center">
            <span className="mr-1">{option?.icon}</span>
            <span className="mr-1">{position}</span>
            <button 
              type="button" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFormData(prev => ({
                  ...prev,
                  positions: prev.positions.filter(pos => pos !== position)
                }));
              }}
              className="ml-1 text-xs hover:bg-blue-700 hover:bg-opacity-50 rounded-full w-4 h-4 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        );
      })}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
        className="flex-grow bg-transparent outline-none text-white min-w-[100px]"
        placeholder={formData.positions.length ? "" : "Type to search positions..."}
      />
    </div>
    
    {dropdownOpen && (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute mt-1 w-full bg-indigo-900 bg-opacity-90 backdrop-blur-md rounded-lg border border-white border-opacity-20 shadow-xl z-20 max-h-48 overflow-y-auto"
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map(option => (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center p-2 cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 transition ${formData.positions.includes(option.title) ? 'bg-blue-600 bg-opacity-30' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePositionSelect(option);
              }}
            >
              <div className={`w-6 h-6 flex-shrink-0 rounded border mr-3 flex items-center justify-center transition-colors ${formData.positions.includes(option.title) ? 'bg-blue-500 border-blue-300' : 'border-white border-opacity-30'}`}>
                {formData.positions.includes(option.title) && <span className="text-white text-sm">✓</span>}
              </div>
              <span className="text-lg mr-2">{option.icon}</span>
              <span className="text-white">{option.title}</span>
            </motion.div>
          ))
        ) : (
          <div className="p-3 text-white text-opacity-70 text-center">No matching positions</div>
        )}
      </motion.div>
    )}
  </div>
</div>
            </motion.div>
            
            <div className="flex justify-between pt-4">
              {currentSection > 0 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={prevSection}
                  className="px-6 py-3 bg-transparent border border-white border-opacity-30 text-white font-medium rounded-lg transition hover:bg-white hover:bg-opacity-10"
                >
                  Back
                </motion.button>
              ) : (
                <div></div>
              )}
              
              {currentSection < formSections.length - 1 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={nextSection}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg transition hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/30"
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg transition hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </div>
                  ) : (
                    "Register Now"
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
      
      {/* Floating 3D badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="absolute bottom-4 left-4 bg-white bg-opacity-10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs border border-white border-opacity-20 shadow-lg"
      >
        Join our talent network today! 🚀
      </motion.div>
    </div>
  );
};

// Add required CSS for 3D and animation effects
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  .form-container {
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: perspective(1000px) rotateX(5deg);
    transform-style: preserve-3d;
  }
  
  .form-container.loaded {
    transform: perspective(1000px) rotateX(0deg);
  }
  
  .field-container {
    transform: translateZ(0);
    transition: transform 0.3s ease;
  }
  
  .field-container:hover {
    transform: translateZ(10px);
  }
  
  .particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    animation: float linear infinite, pulse ease infinite;
  }
  
  .success-animation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease;
    z-index: 100;
  }
  
  .success-animation.active {
    opacity: 1;
    visibility: visible;
  }
  
  .success-icon {
    width: 100px;
    height: 100px;
    background-color: #4CAF50;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
    transform: scale(0);
    animation: success-pop 0.5s forwards 0.2s;
  }
  
  .success-text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    opacity: 0;
    animation: fade-in 0.5s forwards 0.5s;
  }
  
  @keyframes success-pop {
    0% { transform: scale(0); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

document.head.appendChild(style);

export default CandidateRegister;