import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Nav from './components/nav-bar/nav-bar.js'
import Home from './components/home/home.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Nav>
      </Router>
    </div>
  );
}

export default App;
