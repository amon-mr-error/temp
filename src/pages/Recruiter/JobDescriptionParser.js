import React, { useMemo } from 'react';

const JobDescriptionParser = ({ jobDescriptionText }) => {
  const parsedSections = useMemo(() => {
    if (!jobDescriptionText) return [];

    // Split the job description by section dividers (multiple dashes)
    const sections = jobDescriptionText.split(/[-]{10,}/);
    
    const parsedData = [];
    
    sections.forEach(section => {
      // Skip empty sections
      if (!section.trim()) return;
      
      // Check if the section has a title (all caps followed by newline)
      const titleMatch = section.match(/^\s*\*\*(.*?)\*\*|^\s*([A-Z][A-Z\s&]+)(?:\n|\r\n)/);
      
      if (titleMatch) {
        const title = (titleMatch[1] || titleMatch[2]).trim();
        // Get content after the title
        const content = section.substring(titleMatch[0].length).trim();
        
        // Parse list items (lines starting with -)
        const listItems = content.split(/\n/).filter(line => line.trim().startsWith('-')).map(item => item.trim().substring(1).trim());
        
        // Add to parsed data
        parsedData.push({
          title,
          content,
          listItems: listItems.length > 0 ? listItems : null
        });
      } else {
        // No clear title found, just add the whole section
        parsedData.push({
          title: null,
          content: section.trim(),
          listItems: null
        });
      }
    });
    
    return parsedData;
  }, [jobDescriptionText]);

  if (!jobDescriptionText || !parsedSections.length) {
    return (
      <div className="p-4 text-gray-500 italic bg-gray-50 rounded-lg">
        No job description available
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg max-h-80 overflow-y-auto border border-gray-100 shadow-inner">
      {parsedSections.map((section, index) => (
        <div key={index} className={`mb-4 ${index > 0 ? 'pt-4 border-t border-gray-200' : ''}`}>
          {section.title && (
            <h4 className="text-sm font-bold text-gray-700 uppercase mb-2">{section.title}</h4>
          )}
          
          {section.listItems ? (
            <ul className="list-disc pl-5 space-y-1">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-800">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-800 whitespace-pre-line">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobDescriptionParser;