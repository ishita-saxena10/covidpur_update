import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Food from "./Components/Food/FoodForFreeContainer";
import Guidlines from "./Components/Guidelines/Guidlines";
import HospitalContainer from "./Components/Hospital/HospitalContainer";
import Medicine from "./Components/Medicine/Medicine";
import ShopsContainer from "./Components/Shop/ShopsContainer";
import Vaccine from "./Components/Vaccinated/Vaccine";
import Donate from "./Components/Donate/Donate";
import DonatePlasma from "./Components/Donate/DonatePlasma";
import Initiative from "./Components/Initiative/Initiative";
import OxygenContainer from "./Components/Oxygen/OxygenContainer";

import Plasma from "./Components/Plasma/Plasma";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Plasma" component={Plasma} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/Guidlines" component={Guidlines} />
          <Route exact path="/hospital" component={HospitalContainer} />
          <Route exact path="/medicine" component={Medicine} />
          <Route exact path="/oxygen" component={OxygenContainer} />
          <Route exact path="/shops" component={ShopsContainer} />
          <Route exact path="/vaccinated" component={Vaccine} />
          <Route exact path="/donate_plasma" component={DonatePlasma} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/initiative" component={Initiative} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
