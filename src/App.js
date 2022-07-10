import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Log_in from "./Log_in";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/login" element={<Log_in />} />
          <Route exact path="/signup" element={<Signup />} />
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;
