import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'

function App() {
  return (
    <div className="App">
      
      <Heading />
      
      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Klicke auf den entsprechenden Link, um zu den erstellten Bildern der Kinder zu gelangen.
        </p>
        <p>
          Hallo
        </p>
      </div>
    </div>
  );
}

export default App;
