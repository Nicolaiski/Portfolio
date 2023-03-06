import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import Music from "./Pages/Music";
import UserPageDesigns from "./Pages/UserPageDesigns";
import Navbar from "./Components/Navbar"

const App = () => {
  return(

  <div className="content">
    <div>
    <Navbar/>
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/UserPageDesigns" element={<UserPageDesigns />} />      
      </Routes> 
  </div>
   
  );
};
export default App;



