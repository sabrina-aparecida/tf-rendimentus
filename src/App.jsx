import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import * as firebase from 'firebase';
import Login from './pages/login';
import ListBank from './pages/listBank';
import ContasOptions from './pages/creditos_operacoes'

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
        <Route path="/listBank">
          <ListBank />
        </Route>
        <Route path="/Contas_Options">
          <ContasOptions />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
