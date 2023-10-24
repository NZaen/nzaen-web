import { useEffect, useState } from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from './pages/projects/Projects';
import Footer from "./components/footer/Footer";



import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/"element={<Home />}/>
          
     
     
       
          <Route exact path="/projects"element={<Projects />}/>
      

        </Routes>
        <Footer/>
        <FloatingWhatsApp
        phoneNumber="601131707849"
        accountName="Zaen"
        avatar="assets/images/capy.jpg"
        chatMessage="Do you have any questions? Feel free to ask me about anything :D"
        statusMessage="Online"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      </Router>
    </div>
  );
}

export default App;
