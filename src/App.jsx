import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from './pages/skills/Skills';
import Edu from './pages/edu/Edu';
import Exp from './pages/exp/Exp';
import Projects from './pages/projects/Projects';



import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/edu">
            <Edu />
          </Route>
          <Route exact path="/exp">
            <Exp />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
