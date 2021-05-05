import React from "react";
import GetOrder from '../getOrder/GetOrder';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import OrdenesEnProceso from "../ordenEnProceso/OrdenesEnProceso";
import OrdenesListas from "../ordenesListas/OrdenesListas";

function Paths () {
  return (
    <Router>      
        <Switch>
          <Route path="/ordenesListas">
            <OrdenesListas/>          
          </Route>
          <Route path="/OrdenesEnProceso">
            < OrdenesEnProceso/>          
          </Route>
          <Route path="/">
            <GetOrder />
          </Route>
        </Switch>   
    </Router>
  );
}

export default Paths;

