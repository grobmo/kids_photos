import React from 'react';

import './Root.css';
import Heading from './Heading';
import logo from '../images/logo.svg'; 


export class Root extends React.Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div>
          {this.props.children}
        </div>
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
}
