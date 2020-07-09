import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing'

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Landing} />
     </div>
  </Router>
  );

export default App;
