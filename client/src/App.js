import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Park from './components/Park'

import 'bulma/css/bulma.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/parks/:parkId' component={Park} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
