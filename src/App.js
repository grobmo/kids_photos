import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'
import StartPageLink from './StartPageLink'

function App() {
  return (
    <div className="App">
      
      <Heading />
      <StartPageLink kidsName1="Mira" kidsName2="Matteo"/>
      
      <div className="RefLink">Icons erstellt von 
        <a href="https://www.flaticon.com/de/autoren/freepik" title="Freepik">Freepik </a> 
        from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div className="Child-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
