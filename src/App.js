import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing'
import Signup from './Signup'

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" exact component={Signup}/>
     </div>
  </Router>
  );

export default App;
