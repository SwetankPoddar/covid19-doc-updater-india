import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Doc from './components/doc';
import SubscribeModal from "./components/subscribeModal";

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
      <main className="container">        
        <h1>Covid-19 Docs Updator for India</h1>

        <span className="message-holder">Data {docs.length === 0 ? "being": null} retrieved from <a href="https://www.mohfw.gov.in/"  rel="noopener noreferrer" target="_blank">Ministry of Health and Family Welfare of India</a></span>
        
        <div className="text-center">
          <SubscribeModal/>
        </div>
        
        <div className="doc-holder">
        {docs.length > 0 ?  docs.map((doc, i) => <Doc key={"update-" + i} information={doc}/>) : <img src="/loading.gif" alt="loading animation"/>}
        </div>
      </main>
    </Router>
  );
}

export default App;
