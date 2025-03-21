// src/pages/Candidate/CandidateDescriptionParser.js
import React, { useMemo } from 'react';

const formatNumbers = (text) => {
  return text.replace(/(\d+\.\d+)/g, (match) => {
    const num = parseFloat(match);
    return isNaN(num) ? match : num.toFixed(2);
  });
};

const CandidateDescriptionParser = ({ candidateDescriptionText }) => {
  const parsedSections = useMemo(() => {
    if (!candidateDescriptionText) return [];

    const sections = candidateDescriptionText.split(/[-]{10,}/);
    const parsedData = [];

    sections.forEach((section) => {
      if (!section.trim()) return;
      const titleMatch = section.match(/^\s*\*\*(.*?)\*\*|^\s*([A-Z][A-Z\s&]+)(?:\n|\r\n)/);
      let title = null;
      let content = '';
      if (titleMatch) {
        title = (titleMatch[1] || titleMatch[2]).trim();
        content = section.substring(titleMatch[0].length).trim();
      } else {
        content = section.trim();
      }
      const formattedContent = formatNumbers(content);
      const listItems = formattedContent
        .split(/\n/)
        .filter((line) => line.trim().startsWith('-'))
        .map((item) => formatNumbers(item.trim().substring(1).trim()));
      parsedData.push({
        title,
        content: formattedContent,
        listItems: listItems.length > 0 ? listItems : null,
      });
    });

    return parsedData;
  }, [candidateDescriptionText]);

  if (!candidateDescriptionText || parsedSections.length === 0) {
    return (
      <div className="p-4 text-gray-500 italic bg-gray-50 rounded-lg">
        No candidate description available
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg max-h-80 overflow-y-auto border border-gray-100 shadow-inner">
      {parsedSections.map((section, index) => (
        <div key={index} className={`mb-4 ${index > 0 ? 'pt-4 border-t border-gray-200' : ''}`}>
          {section.title && (
            <h4 className="text-sm font-bold text-gray-700 uppercase mb-2">
              {section.title}
            </h4>
          )}
          {section.listItems ? (
            <ul className="list-disc pl-5 space-y-1">
              {section.listItems.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-800 whitespace-pre-line">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CandidateDescriptionParser;
