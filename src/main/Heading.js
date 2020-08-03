import React from 'react';
import './Heading.css';

function Heading() {
  return (
    <div className="Heading">
      <header className="Heading-header">
        <h1>
          Mira's und Matteo's Fotobox.
        </h1>
        <a
          className="App-link"
          href="https://google.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          GrobMo
        </a>
        
      </header>
    </div>
  );
}

export default Heading;
