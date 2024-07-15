// src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async () => {
    const response = await axios.post('http://localhost:5000/api/query', { query });
    setResults(response.data);
  };

  return (
    <div>
      <h1>AI-Powered Event and Company Data Explorer</h1>
      <input 
        type="text" 
        value={query} 
        onChange={handleQueryChange} 
        placeholder="Enter your query" 
      />
      <button onClick={handleQuerySubmit}>Search</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p>Event: {result.event_name}</p>
            <p>Company: {result.company_name}</p>
            <p>Person: {result.person_name}</p>
            <p>Email: {result.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
