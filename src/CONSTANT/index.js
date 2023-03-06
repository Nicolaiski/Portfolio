
import { people01, people02, people03,
send, shield, star,} from "../assets";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import index from "../CONSTANT";
// import { Play } from "..Play/";
// import "../index.css";
// import Music from "../Pages/Music";

import { Link } from 'react-router-dom';





/////////NAV.LINKS///////////////////////////////////////////
export const navLinks = [
  {
    
    id: "",
    title: "Home",
  },
  
  {

    id: "music",
    title: "Music",
  },
  {
    id: "MidiController",
    title: "MIDI Controller",
  },
  {
    id: "UserPageDesigns",
    title: "Designs",
  },

  // {
  //   id: "Portfolio/Designs",
  //   title: "UserPageDesigns",
  // },




];


////////FEATURES/////////////////////////
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];


///////////////////////FEEDBACK///////////////////////
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

///////////////////////FOOTER.LINKS///////////////////////

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
   
    ],
  },
  {
    
      
    title: "Socials",
    links: [
      
      {
         name: "Instagram",
         link: "https://www.instagram.com/_jeunepremier_/", 
              
      },
      {
        name: "Soundcloud",
        link:"https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];


///////////////////////TRACKS///////////////////////

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
///////////////////////ROOT///////////////////////
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Player trackList={tracks} />
//   </React.StrictMode>
// );