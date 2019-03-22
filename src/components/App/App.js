import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import Services from "../Services/Services";
import About from "../About/About";

import "./App.css";

const App = () => {
  return (
    <main>
      <Router>
        <Header>
          <ul className="headerListContainer">
            <li className="headerLogo">
              <Link to="/" className="headerLink">
                Agency Logo
              </Link>
            </li>
            <li className="headerListItem">
              <Link to="/" className="headerLink">
                Home
              </Link>
            </li>
            <li className="headerListItem">
              <Link to="/services" className="headerLink">
                Services
              </Link>
            </li>
            <li className="headerListItem">
              <Link to="/about" className="headerLink">
                About
              </Link>
            </li>
          </ul>
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
