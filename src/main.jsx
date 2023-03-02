// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import Amplitude from 'amplitude-js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";``
// import Music from "./Pages/Music";

// const tracks = [
//   {
//     url: "https://www.dropbox.com/s/8kpb1gemfjmjp9j/STICKY%20FINGERS%20.wav?dl=0",
//     title: "Sticky Fingerz - Jeune Premier",
//     tags: ["future bass"],
//   },
//   {
//     url: "https://www.dropbox.com/s/8inw9edd9pgd96h/AYO.mp3?dl=0",
//     title: "SIGN - Jeune Premier",
//     tags: ["beat"],
//   },
//   {
//     url: "https://www.dropbox.com/s/9d68wyeiy3l5fpp/7514.wav?dl=0",
//     title: "7514 - Jeune Premier",
//     tags: ["liquid dnb"],
//   },

//   {
//     url: "https://www.dropbox.com/s/xmvs3r52dw5i684/HILL.mp3?dl=0",
//     title: "Hill - Jeune Premier",
//     tags: ["texture"],
//   },

//   {
//     url: "https://www.dropbox.com/s/ppx53s8oxwztgsw/LOST%20IN%20THOUGHTS.mp3?dl=0",
//     title: "Lost In Thoughts - Jeune Premier",
//     tags: ["liquid dnb"],
//   },

//   {
//     url: "https://www.dropbox.com/s/u5kngf2p4op5k1l/Why%20am%20i%20like%20dis.mp3?dl=0",
//     title: "Why Am I Like Dis - Jeune Premier",
//     tags: ["liquid dnb"],
//   },

// ];


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <Music tracklist={tracks}/> */}
    <App />
  </BrowserRouter>
);
