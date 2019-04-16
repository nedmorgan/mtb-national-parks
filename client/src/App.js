import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
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
            {/* <Route path='/artists/:id' component={Artist} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
