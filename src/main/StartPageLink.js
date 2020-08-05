import React from 'react';
import './StartPageLink.css';
import female from '../images/femaleOrig.png';
import male from '../images/maleOrig.png';
import {Link, HashRouter} from 'react-router-dom';

function StartPageLink(props) {
    return (
      <div className="Child-container">              
        <HashRouter>
          <div className="Child-box">
            <Link to="/album" className="App-link"
              target="_parent"
              rel="noopener noreferrer">
              <img src={female} width='10%' alt={props.kidsName1} />
            </Link>
            <p> {props.kidsName1} Album</p>
          </div>
          <div className="Child-box">
            <Link to="/album" className="App-link"
              target="_parent"
              rel="noopener noreferrer">
              <img src={male} width='10%' alt={props.kidsName2} />
            </Link>
            <p> {props.kidsName2} Album</p>
          </div>
        </HashRouter>
      </div>
    );
}

export default StartPageLink;