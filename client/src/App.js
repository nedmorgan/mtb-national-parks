import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import 'bulma/css/bulma.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/* <Route exact path='/' component={ArtistList} />
            <Route path='/artists/:id' component={Artist} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
