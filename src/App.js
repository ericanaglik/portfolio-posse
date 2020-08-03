import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing'
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./style/index.css"
import UserInfo from "./pages/UserInfo";

const App = () => (
  <div>
    <Router history={history}>
      <UserProvider>
          <Route path="/profile" component={Profile} />
      </UserProvider>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={Home} />
      <Route path="/userInfo" component={UserInfo} />
    </Router>
  </div>
  );

export default App;
