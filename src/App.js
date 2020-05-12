import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Nav from './components/nav-bar/nav-bar'
import Home from './components/home/home'
import ProductListPage from './components/plp-page/plp-page'
import BasketPage from './components/basket-page/basket-page'
import Header from './components/header/header';
import speakers from './data/speakers'
import turntables from './data/turntables'

function App() {

  let keyedSpeakers = speakers.map((item, index) => {
    item.key = index
    return item
  })

  let keyedTurntables = turntables.map((item, index) => {
    item.key = index
    return item
  })

  return (
    <Router>
    <div className="App">
        <Header/>
        <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/turntables' exact render={(props) => <ProductListPage title="Turntables" items={keyedTurntables} {...props} />}/>
            <Route path='/speakers' exact render={(props) => <ProductListPage title="Speakers" items={keyedSpeakers} {...props} />}/>
            <Route path='/basket' exact component={BasketPage}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
