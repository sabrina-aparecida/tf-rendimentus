import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Services from './pages/services';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
    
  return (
    <Router>
              <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/services">
            <Services/>
            </Route>          
            </Switch>
    </Router>
  );
}


export default App;
