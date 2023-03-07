import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Music from "./Pages/Music";
import UserPageDesigns from "./Pages/UserPageDesigns";
import UserPage from "./Pages/UserPage";
import HomePage from "./Pages/HomePage";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>

);
