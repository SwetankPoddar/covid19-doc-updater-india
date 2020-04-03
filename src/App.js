import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Doc from './components/doc';

import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [docs, setDocs] = useState([]);
  
  useEffect(() => {
    fetch('/api/fetch_docs')
      .then(res => res.json())
      .then((result) => {
        setDocs(result)
      })

  }, []);
  
  return (
    <Router>
      <main>
        <h1>COVID19 - Goverment Docs Updator</h1>
        {docs ? docs.map((doc, i) => <Doc key={"update-" + i} information={doc}/>) : <h1>Loading</h1>}
      </main>
    </Router>
  );
}

export default App;
