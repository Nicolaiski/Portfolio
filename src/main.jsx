import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Music from "./Pages/Music";
import UserPageDesigns from "./Pages/UserPageDesigns";
import UserPage from "./Pages/UserPage";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
  // <React.StrictMode>
  //   <HashRouter>
  //   {/* <BrowserRouter> */}
  //     <Routes>
  //       <Route path="*" element={<App/>} />
  //       {/* <Route path="/" element={<HomePage />} /> */}
  //       {/* <Route path="/UserPage" element={<UserPage />} />
  //       <Route path="/Music" element={<Music />} />
  //       <Route path="/UserPageDesigns" element={<UserPageDesigns />} /> */}
  //     </Routes>
      
  //   </HashRouter>
  //   {/* </BrowserRouter> */}
  // </React.StrictMode>

);