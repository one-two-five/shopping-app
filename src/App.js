import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Nav from './components/nav-bar/nav-bar'
import Home from './components/home/home'
import ProductListPage from './components/plp-page/plp-page'
import BasketPage from './components/basket-page/basket-page'
import Header from './components/header/header';


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/turntables' component={ProductListPage}/>
            <Route path='/speakers' component={ProductListPage}/>
            <Route path='/basket' component={BasketPage}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
