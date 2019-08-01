import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddSusbscriber from './AddSubscriber';
function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" render={(props)=><Homepage {...props} />}/>
      <Route exact path="/Add" render={(props)=><AddSusbscriber {...props}/>}/>
      </div>
    </Router>
  );
}

export default App;
