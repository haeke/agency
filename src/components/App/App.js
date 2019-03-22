import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../Home/Home";
import Header from "../Header/Header";
import Services from "../Services/Services";
import About from "../About/About";

const App = () => {
  return (
    <main>
      <Router>
        <Header>
          <ul>
            <li>
              <Link to="/">Agency Logo</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
