import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Submit from "./components/pages/Submit";
import Skills from "./components/pages/skills/Skills";
import Experiences from "./components/pages/experiences/Experiences";
import Educations from "./components/pages/educations/Educations";
import Contact from "./components/pages/contact/contact.js";
import "./App.css";
import Portfolios from "./components/pages/portfolios/portfolios";
import RequestPage from "./components/requestPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/contact" component={Contact} />
          <Route path="/submit" component={Submit} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/requestPage" component={RequestPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
