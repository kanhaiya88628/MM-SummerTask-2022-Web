import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Log_in from "./Log_in";
import Trending from "./Trending"
import Eachpost from "./Eachpost"



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
          <Route path="/trendingArticles" element={<Trending />} />
          <Route path="/eachpost" element={<Eachpost />} />
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;
