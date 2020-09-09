import React from 'react';
import {
  BrowserRouter as Router,
  Switch,

  Route,
  Redirect,
} from "react-router-dom";


import * as firebase from 'firebase';
import Login from './pages/login';
import Home from './pages/home';
import Services from './pages/services';
import ListBank from './pages/listBank';

const firebaseConfig = {
  apiKey: "AIzaSyAka5GTL8jbx5CGnHndNX_flBeNqeXMNvw",
  authDomain: "tf-rendimentus.firebaseapp.com",
  databaseURL: "https://tf-rendimentus.firebaseio.com",
  projectId: "tf-rendimentus",
  storageBucket: "tf-rendimentus.appspot.com",
  messagingSenderId: "551754704215",
  appId: "1:551754704215:web:526701dc6fc91a8fa08a12"
};
const appFirebase = firebase.initializeApp(firebaseConfig);


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/listBank">
          <ListBank />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
