import React from 'react';
import './StartPageLink.css';
import female from '../images/femaleOrig.png';
import male from '../images/maleOrig.png';


function StartPageLink(props) {
    return (
      <div className="Child-container">

        <div className="Child-box">
        <a
          className="App-link"
          href="https://google.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={male} width='10%' alt={props.kidsName1} />
        </a>
          <p> {props.kidsName1} Album</p>
        </div>
        <div className="Child-box">
        <a
          className="App-link"
          href="https://google.de"
          target="_blank"
          rel="noopener noreferrer"
          alt="{props.kidsName2}"
        >
           <img src={female} width='10%' alt={props.kidsName2} />
        </a>
          <p>{props.kidsName2} Album</p>
        </div>
      </div>
    );
}

export default StartPageLink;