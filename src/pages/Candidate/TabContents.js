
import React from 'react';

const getScoreColor = (score) => {
  if (score >= 70) return 'text-green-600 bg-green-100';
  if (score >= 40) return 'text-yellow-600 bg-yellow-100';
  return 'text-red-600 bg-red-100';
};

export const AssessmentScores = ({ candidate }) => {
  const atsScore = candidate.ats ? parseFloat(candidate.ats) : 0;
  const atsScorePercentage = Math.min(Math.max(atsScore * 10, 0), 100);
  const atsScoreColor = getScoreColor(atsScorePercentage);

  const similarityScore = candidate.overall_similarity ? parseFloat(candidate.overall_similarity) : 0;
  const similarityScorePercentage = Math.min(Math.max(similarityScore * 100, 0), 100);
  const similarityScoreColor = getScoreColor(similarityScorePercentage);

  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-white text-xl font-bold">Assessment Scores</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ATS Score */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Score</h3>
              <p className="text-sm text-gray-500 mt-1">Evaluation of your resume</p>
            </div>
            
            <div className="px-6 py-5">
              <div className="flex items-center mb-4">
                <span className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${atsScoreColor} mr-4`}>
                  <span className="text-lg font-semibold">{candidate.ats}</span>
                </span>
                <div>
                  <p className="text-sm text-gray-500">Resume compatibility score</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${atsScorePercentage}%`,
                    backgroundColor: atsScorePercentage >= 70 ? '#10B981' : atsScorePercentage >= 40 ? '#F59E0B' : '#EF4444'
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">0</span>
                <span className="text-xs text-gray-500">10</span>
              </div>
            </div>
          </div>
          
          {/* Overall Similarity Score */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Overall Similarity</h3>
              <p className="text-sm text-gray-500 mt-1">Profile match evaluation</p>
            </div>
            
            <div className="px-6 py-5">
              <div className="flex items-center mb-4">
                <span className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${similarityScoreColor} mr-4`}>
                  <span className="text-lg font-semibold">{Math.round(candidate.overall_similarity * 100) / 100 || "0"}</span>
                </span>
                <div>
                  <p className="text-sm text-gray-500">Match score</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${similarityScorePercentage}%`,
                    backgroundColor: similarityScorePercentage >= 70 ? '#10B981' : similarityScorePercentage >= 40 ? '#F59E0B' : '#EF4444'
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">0</span>
                <span className="text-xs text-gray-500">1.0</span>
              </div>
            </div>
          </div>
          
          {/* Detailed Similarity Scores */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Detailed Similarity Scores</h3>
              <p className="text-sm text-gray-500 mt-1">Breakdown by category</p>
            </div>
            
            <div className="px-6 py-5">
              {candidate.similarityScores && candidate.similarityScores.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {candidate.similarityScores.map((score, index) => {
                    let category = "Score";
                    let value = 0;
                    if (typeof score === 'string' && score.includes(':')) {
                      [category, value] = score.split(':');
                      value = parseFloat(value);
                    } else if (typeof score === 'number') {
                      value = score;
                    }
                    const scorePercentage = Math.min(Math.max(value * 100, 0), 100);
                    const scoreColor = getScoreColor(scorePercentage);
                    
                    return (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{category}</span>
                          <span className={`text-sm font-semibold ${scoreColor.split(' ')[0]}`}>{value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${scorePercentage}%`,
                              backgroundColor: scorePercentage >= 70 ? '#10B981' : scorePercentage >= 40 ? '#F59E0B' : '#EF4444'
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6">
                  <svg className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Application Submission Pending</p>
                  <p className="mt-1 text-xs text-gray-400">Detailed scores will appear after processing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ApplicationStatus = ({ candidate }) => {
  // Helper function to render an application (offer or rejection)
  const renderApplication = (app) => {
    if (typeof app === 'object') {
      const { company, salary, position } = app;
      return (
        <div>
          <p className="text-sm font-medium text-gray-900">{company} - {position}</p>
          {salary && <p className="text-xs text-gray-500 mt-1">Salary: ${salary}</p>}
        </div>
      );
    } else {
      return <p className="text-sm font-medium text-gray-900">{app}</p>;
    }
  };

  const formatCompanyList = (list) => {
    if (!list || list.length === 0) return [];
    return Array.isArray(list) ? list : [list];
  };

  const offers = formatCompanyList(candidate.offers_available);
  const rejections = formatCompanyList(candidate.rejected_from);

  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-white text-xl font-bold">Application Status</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Offers */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-green-50">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900">Offers Received</h3>
              </div>
            </div>
            
            <div className="px-6 py-5">
              {offers && offers.length > 0 ? (
                <div className="space-y-3">
                  {offers.map((offer, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="bg-green-100 rounded-full p-2 mr-3">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        {renderApplication(offer)}
                        <p className="text-xs text-gray-500 mt-1">Offer available</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <svg className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">No offers received yet</p>
                  <p className="mt-1 text-xs text-gray-400">Check back later as applications are processed</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Rejections */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 bg-red-50">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900">Applications Not Selected</h3>
              </div>
            </div>
            
            <div className="px-6 py-5">
              {rejections && rejections.length > 0 ? (
                <div className="space-y-3">
                  {rejections.map((rejection, index) => (
                    <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg">
                      <div className="bg-red-100 rounded-full p-2 mr-3">
                        <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        {renderApplication(rejection)}
                        <p className="text-xs text-gray-500 mt-1">Application not selected</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <svg className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">No rejections received</p>
                  <p className="mt-1 text-xs text-gray-400">All your applications are still being processed</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Status Summary */}
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Application Summary</h3>
            </div>
            
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                  <p className="text-sm text-gray-700 mt-1">Applications Submitted</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-green-600">{offers.length}</span>
                  <p className="text-sm text-gray-700 mt-1">Offers Received</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <span className="text-2xl font-bold text-red-600">{rejections.length}</span>
                  <p className="text-sm text-gray-700 mt-1">Applications Rejected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
