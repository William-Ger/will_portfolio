import React, { useState } from 'react';
import { fetchReport } from './api.js';
import './api.css';

function ApiPage() {
  const [inputData, setInputData] = useState('');
  const [report, setReport] = useState(null);

  const handleFetchReport = async () => {
    try {
      const data = await fetchReport({ input: inputData });
      setReport(data);
    } catch (error) {
      console.error('Fetching report failed:', error);
    }
  };

  return (
    <div className="apiPageContainer">
      <div className="centerContainer">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter input here" // Optional placeholder text
        />
        <button onClick={handleFetchReport}>Get Report</button>
      </div>
      {report && (
        <div className="report">
          {/* Render your report data here */}
        </div>
      )}
    </div>
  );
}

export default ApiPage;
