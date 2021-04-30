import React from "react";
import GetOrder from '../getOrder/GetOrder';
import OrdenLista from '../ordenLista/ordenLista';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

function Paths () {
  return (
    <Router>      
        <Switch>
          <Route path="/ordenLista">
            < OrdenLista/>          
          </Route>
          <Route path="/">
            <GetOrder />
          </Route>
        </Switch>   
    </Router>
  );
}

export default Paths;

