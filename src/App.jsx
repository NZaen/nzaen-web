import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from './pages/skills/Skills';
import Edu from './pages/edu/Edu';
import Exp from './pages/exp/Exp';
import Projects from './pages/projects/Projects';



import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/"element={<Home />}/>
          
          <Route exact path="/about"element={<About />}/>
         
      
          <Route exact path="/skills"element={<Skills />}/>
     
        
          <Route exact path="/edu"element={<Edu />}/>
        
     
          <Route exact path="/exp"element={<Exp />}/>
     
       
          <Route exact path="/projects"element={<Projects />}/>
      

        </Routes>
      </Router>
    </div>
  );
}

export default App;
