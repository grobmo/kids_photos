import React from 'react';
import {Link, HashRouter} from 'react-router-dom';
import kidsfoto from '../images/kidsfoto.png';



export class AlbumView extends React.Component {
  render() {
      return (
          <div>
              <h1>
                  Album Überschrift
              </h1>
              <p>
                  Album Inhalt
              </p>

              <div className="Child-container">              
                <HashRouter>

                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                <div className="Child-box">
                    <Link to="/album" className="App-link"
                    target="_parent"
                    rel="noopener noreferrer">
                    <img src={kidsfoto} width='10%' alt='' />
                    <p>hdbchd</p>
                    </Link>
                    
                </div>
                </HashRouter>
      </div>
          </div>
          
      );
  }
}