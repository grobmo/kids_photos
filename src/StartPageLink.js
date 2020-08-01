import React from 'react';
import './StartPageLink.css';

function StartPageLink(props) {
    return (
      <div className="Child-container">
        <p>+ Hier muss text folgen  {props.kidsName}</p>
      </div>
    );
}

export default StartPageLink;