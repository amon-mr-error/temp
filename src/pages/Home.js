import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  // Animation controls for scroll-triggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.25, 0.3, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaC0xdjFoMXYtMXptLTEtMWgxdi0xaC0xdjF6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4wNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.1, 0.25, 0.3, 1] }}
              className="space-y-8 lg:col-span-6"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="block">Match</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Perfect Talent</span>
                <span className="block">With Perfect Opportunities</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Our AI-powered platform connects top talent with their ideal roles, delivering exceptional matches for candidates, recruiters, and universities alike.
              </motion.p>
              
              <motion.div 
                className="pt-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                  <motion.div variants={fadeInUp} className="w-full">
                    <Link to="/candidate/register" className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      Candidate Registration
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="w-full">
                    <Link to="/recruiter/register" className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      Recruiter Registration
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="w-full">
                    <Link to="/university/report" className="flex items-center justify-center w-full px-6 py-4 bg-white bg-opacity-90 border border-blue-600 text-blue-600 hover:text-blue-800 hover:border-blue-800 font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-1 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      University Report
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="w-full">
                    <Link to="/login" className="flex items-center justify-center w-full px-6 py-4 bg-white bg-opacity-90 border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-1 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Login
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              className="relative lg:col-span-6"
            >
              <div className="relative">
                {/* Animated background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-2 scale-105 opacity-20 blur-lg animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl transform -rotate-2 scale-105 opacity-10 blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Main content card */}
                <div className="overflow-hidden relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30">
                  {/* Glossy header bar */}
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-b border-gray-300/30 p-3 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-500">AI Performance Metrics</div>
                    <div className="w-16"></div> {/* Empty div for balance */}
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <motion.div 
                      className="flex items-center gap-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-300/50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">Smart Job Matching & Recruitment</h3>
                          <span className="text-blue-600 font-bold text-xl group-hover:scale-110 transition-transform">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-blue-700 h-2.5 rounded-full relative"
                            initial={{ width: 0 }}
                            animate={{ width: '88%' }}
                            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-green-300/50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">Enhanced Candidate Filtering</h3>
                          <span className="text-green-600 font-bold text-xl group-hover:scale-110 transition-transform">91%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-green-500 to-green-700 h-2.5 rounded-full relative"
                            initial={{ width: 0 }}
                            animate={{ width: '88%' }}
                            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>                    
                    
                    <motion.div 
                      className="flex items-center gap-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-purple-300/50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">University Level Peer-Ranking</h3>
                          <span className="text-purple-600 font-bold text-xl group-hover:scale-110 transition-transform">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-purple-500 to-purple-700 h-2.5 rounded-full relative" 
                            initial={{ width: 0 }}
                            animate={{ width: '95%' }}
                            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-6 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-orange-300/50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg">Talent Success Rate</h3>
                          <span className="text-orange-500 font-bold text-xl group-hover:scale-110 transition-transform">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2.5 rounded-full relative" 
                            initial={{ width: 0 }}
                            animate={{ width: '92%' }}
                            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-sm"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Footer with subtle branding */}
                  <div className="px-8 py-4 border-t border-gray-200 flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="text-xs text-gray-500">Updated in real-time</div>
                    <div className="h-6 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-600">LIVE DATA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;