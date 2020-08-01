import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'
import StartPageLink from './StartPageLink'

function App() {
  return (
    <div className="App">
      
      <Heading />
      <StartPageLink kidsName="Mira"/>
      <div className="App-div">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Klicke auf den entsprechenden Link, um zu den erstellten Bildern der Kinder zu gelangen.
        </p>
        
      </div>
      <StartPageLink kidsName="Matteo"/>
    </div>
  );
}

export default App;
