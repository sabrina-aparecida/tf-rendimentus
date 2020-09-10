import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login/login';
import ListBank from './pages/listBank/listBank';
import Offers from './pages/offers';
import MenuBank from './pages/menuBank/menuBank';
import Extract from './pages/extrato/extrato';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/offers">
          <Offers />
        </Route>
        <Route path="/listBank">
          <ListBank />
        </Route>
        <Route path="/menuBank/:id">
          <MenuBank />
        </Route>
        <Route path="/extract/:id">
          <Extract />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
//Comentarios para mudar a coisa toda