import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PositionSelector = ({ positions, selectedPositions, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const positionsOptions = [
    { id: 'ds', title: 'Data Scientist', icon: '📊' },
    { id: 'me', title: 'Marketing Executive', icon: '📈' },
    { id: 'fsd', title: 'Full Stack Developer', icon: '💻' },
    { id: 'sd', title: 'Senior Developer', icon: '👨‍💻' }
  ];
  
  const filteredOptions = positionsOptions.filter(option => 
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelect = (position) => {
    let newPositions = [...selectedPositions];
    if (newPositions.includes(position.title)) {
      newPositions = newPositions.filter(pos => pos !== position.title);
    } else {
      newPositions.push(position.title);
    }
    onChange(newPositions);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <div className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:bg-opacity-20 text-white outline-none focus:ring-2 focus:ring-blue-500 transition flex flex-wrap gap-2 min-h-[56px]">
        {selectedPositions.map((position, idx) => {
          const option = positionsOptions.find(opt => opt.title === position);
          return (
            <div key={idx} className="bg-blue-600 bg-opacity-30 px-2 py-1 rounded-lg flex items-center">
              <span className="mr-1">{option?.icon}</span>
              <span className="mr-1">{position}</span>
              <button 
                type="button" 
                onClick={() => handleSelect(option)}
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
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          className="flex-grow bg-transparent outline-none text-white min-w-[100px]"
          placeholder={selectedPositions.length ? "" : "Type to search positions..."}
        />
      </div>
      
      {isFocused && (
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
                className={`flex items-center p-2 cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 transition ${selectedPositions.includes(option.title) ? 'bg-blue-600 bg-opacity-30' : ''}`}
                onClick={() => handleSelect(option)}
              >
                <div className={`w-6 h-6 flex-shrink-0 rounded border mr-3 flex items-center justify-center transition-colors ${selectedPositions.includes(option.title) ? 'bg-blue-500 border-blue-300' : 'border-white border-opacity-30'}`}>
                  {selectedPositions.includes(option.title) && <span className="text-white text-sm">✓</span>}
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
  );
};

export default PositionSelector;