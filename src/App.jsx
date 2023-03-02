import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Navbar from "./Components/NavBar";
import Music from "./Pages/Music";
import UserPageDesigns from "./Pages/UserPageDesigns";

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
    /* <Music trackList = {tracks}/> */



  );
};
export default App;



