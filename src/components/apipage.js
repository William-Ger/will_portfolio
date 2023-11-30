import React, { useState } from 'react';
import './api.css';

function ApiPage() {
  const [inputData, setInputData] = useState('');
  const [report, setReport] = useState(null);

  const handleFetchReport = async () => {
    try {
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputData }),
      });
      
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      setReport(data);
    } catch (error) {
      console.error('Fetching report failed:', error);
    }
  };
  

  return (
    <div className="apiPageContainer">
      <div className="inputContainer">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
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
