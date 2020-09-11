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
import Contract from './pages/creditos_operacoes/index'
import Error from './pages/error/404'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer position="top-center" />
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
          <Route path="/contract">
            <Contract />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
//Comentarios para mudar a coisa toda