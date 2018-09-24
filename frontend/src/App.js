import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './Home'
import Shop from './Shop'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/shop"> Shop </Link>
        </nav>
        <Route exact path="/" render={(props)=><Home history={props.history}/>} />
        <Route path="/shop" render={()=><Shop/>} />
      </div>
    );
  }
}

export default App;
