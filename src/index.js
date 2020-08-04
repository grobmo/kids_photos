import React from 'react';
import {render} from 'react-dom';
import {Route, Switch, NavLink, HashRouter} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import StartPageLink from './main/StartPageLink';
import {Root} from './main/Root'
import { AlbumView } from './album/AlbumView';
import About from "./main/About";
import Contact from "./main/Contact";

class App extends React.Component {
  render() {
      return (
          <Root>
            <HashRouter>
              <div>
                <NavLink to="/about">about</NavLink>
                <NavLink to="./contact">Contact</NavLink>
                <div className="content">
                  <Switch>
                    <Route exact path="/" component={Root}>
                      <StartPageLink kidsName1="Mira" kidsName2="Matteo"/>
                    </Route>
                    <Route path="/album" component={AlbumView} />
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
                </div>
              </div>
            </HashRouter>
          </Root>
      );
  }
}

render(<App />, window.document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
