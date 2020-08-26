import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Routes/Home";
import Aboutus from "./component/Routes/Aboutus";
import Contactus from "./component/Routes/Contactus";
import Signin from "./component/Routes/Signin";
import BottomNav from "./component/Navbar/BottomNav";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
      </Router>
      <BottomNav />
    </Fragment>
  );
}

export default App;
