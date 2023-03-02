import styles from "../CONSTANT/style";
import React from "react";
// import Music from "./Music";



import {
  // NavBar,
  Hero,
  Billing,
  Business,
//   Button,
  CardDeal,
  CTA,
//   FeedBackCard,
  Footer,
//   GetStarted,
//   Stats,
  Testimonials,
  TrashRadio_Final_Viewer,
  // VideoPlayer,
  Play,
  Navbar,



} from "../Components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
        {/* <NavBar/> */}
    </div>  
    {/* <div>
      <Navbar/>
    </div> */}
    </div>    

    <div className="container">
        {/* <h1>Home </h1> */}
        
        
        
        <p>
          <Link to="/UserPage"></Link>
        </p>
        <p>
          <Link to="/Music"></Link>
        </p>
        <p>
          <Link to="/UserPageDesigns"></Link>
        </p>
        
      
      
      
      </div>



    <div className={`bg-primary ${styles.flexStart}`}>
    <div className= {`${styles.boxWidth}`}>
        <Hero/>
    </div> 
    </div>  



    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className= {`${styles.boxWidth}`}>
        {/* <Stats/> */}
        
        <Business/>
        <div className="blue_gradient rounded-full"> </div>
        <div className= {`bg-primary ${styles.flexStart} ${styles.boxWidth}`}>
        <TrashRadio_Final_Viewer scale="40" modelPath={"/ TrashRadioFinal.gltf"} />
        </div>
        <Billing/>
        <CardDeal/>
        
        <Testimonials/>
        {/* <VideoPlayer/> */}
        <CTA/>
        <Play/>
       
        {/* <MediaPlayer/> */}
        <Footer/>
    </div>
    </div>


    </div>

);
};
export default HomePage;