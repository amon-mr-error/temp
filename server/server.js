// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define file paths for our JSON databases
const candidateFilePath = path.join(__dirname, 'candidate.json');
const recruiterFilePath = path.join(__dirname, 'recruiter.json');
const universityFilePath = path.join(__dirname, 'university.json');

// Utility functions to read and write JSON files
const readJSONFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      // If file does not exist, create it with an empty array
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
};

// -----------------------
// Candidate Endpoints
// -----------------------
app.post('/api/candidate', (req, res) => {
  const candidateData = req.body;
  let candidates = readJSONFile(candidateFilePath);
  candidates.push(candidateData);
  writeJSONFile(candidateFilePath, candidates);
  res.json({ success: true });
});

app.get('/api/candidate', (req, res) => {
  const phone = req.query.phone;
  let candidates = readJSONFile(candidateFilePath);
  const candidate = candidates.find(c => c.phoneNumber === phone);
  if (candidate) {
    res.json(candidate);
  } else {
    res.status(404).json({ error: 'Candidate not found' });
  }
});

// -----------------------
// Recruiter Endpoints
// -----------------------
// Updated Recruiter Registration Endpoint
app.post('/api/recruiter', (req, res) => {
  let recruiterData = req.body;

  // If jobPosition and salaryRange are provided at the top level,
  // move them into a positionsList array.
  if (recruiterData.jobPosition && recruiterData.salaryRange) {
    // Initialize positionsList if not already provided.
    recruiterData.positionsList = recruiterData.positionsList || [];
    recruiterData.positionsList.push({
      jobPosition: recruiterData.jobPosition,
      salaryRange: recruiterData.salaryRange,
      jobDescription: recruiterData.jobDescriptionFile || {}
    });
    // Optionally remove the top-level properties for consistency.
    delete recruiterData.jobPosition;
    delete recruiterData.salaryRange;
    delete recruiterData.jobDescriptionFile;
  }

  let recruiters = readJSONFile(recruiterFilePath);
  recruiters.push(recruiterData);
  writeJSONFile(recruiterFilePath, recruiters);
  res.json({ success: true });
});

app.get('/api/recruiter', (req, res) => {
  const phone = req.query.phone;
  let recruiters = readJSONFile(recruiterFilePath);
  const recruiter = recruiters.find(r => r.phoneNumber === phone);
  if (recruiter) {
    res.json(recruiter);
  } else {
    res.status(404).json({ error: 'Recruiter not found' });
  }
});

// -----------------------
// University Endpoints
// -----------------------
app.post('/api/university', (req, res) => {
  const universityData = req.body;
  let universities = readJSONFile(universityFilePath);
  universities.push(universityData);
  writeJSONFile(universityFilePath, universities);
  res.json({ success: true });
});

app.get('/api/university', (req, res) => {
  const email = req.query.email;
  let universities = readJSONFile(universityFilePath);
  const university = universities.find(u => u.email === email);
  if (university) {
    res.json(university);
  } else {
    res.status(404).json({ error: 'University not found' });
  }
});

// -----------------------
// New Endpoint for Recruiters:
// Returns candidate names (and phoneNumbers) whose positions include the given job position.
app.get('/api/candidate/match', (req, res) => {
    const position = req.query.position;
    let candidates = readJSONFile(candidateFilePath);
    let matchedCandidates = candidates.filter(c => c.positions && c.positions.includes(position));
    // Return only name and phoneNumber for listing purposes.
    matchedCandidates = matchedCandidates.map(c => ({
        name: c.name,
        phoneNumber: c.phoneNumber
    }));
    res.json(matchedCandidates);
  });
  
  // -----------------------
  // New Endpoint for Universities:
  // Returns candidate names (and phoneNumbers) from the given university.
  app.get('/api/candidate/university', (req, res) => {
    const university = req.query.university;
    let candidates = readJSONFile(candidateFilePath);
    let matchedCandidates = candidates.filter(c => c.university === university);
    // Return only name and phoneNumber.
    matchedCandidates = matchedCandidates.map(c => ({
        name: c.name,
        phoneNumber: c.phoneNumber
    }));
    res.json(matchedCandidates);
  });
  
// New Endpoint for Adding a Job Position
app.put('/api/recruiter/position', (req, res) => {
  const { phoneNumber, jobPosition, salaryRange, jobDescription } = req.body;
  let recruiters = readJSONFile(recruiterFilePath);
  const recruiterIndex = recruiters.findIndex(r => r.phoneNumber === phoneNumber);
  if (recruiterIndex !== -1) {
    let recruiter = recruiters[recruiterIndex];
    // Ensure positionsList is initialized.
    if (!recruiter.positionsList) {
      recruiter.positionsList = [];
    }
    recruiter.positionsList.push({ jobPosition, salaryRange, jobDescription });
    recruiters[recruiterIndex] = recruiter;
    writeJSONFile(recruiterFilePath, recruiters);
    res.json({ success: true, recruiter });
  } else {
    res.status(404).json({ error: 'Recruiter not found' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
