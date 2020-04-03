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
  }, [] );
  
  return (
    <Router>
      <main>        
        <h1>Coronavirus Goverment Docs Updator  India</h1>
        <span>Data {docs.length === 0 ? "being": null} retrieved from <a href="https://www.mohfw.gov.in/"  rel="noopener noreferrer" target="_blank">Ministry of Health and Family Welfare of India</a></span>
        {docs.length > 0 ?  docs.map((doc, i) => <Doc key={"update-" + i} information={doc}/>) : <img src="/loading.gif" alt="loading animation"/>}
      </main>
    </Router>
  );
}

export default App;
