import React from "react";
// import { useParams } from "react-router-dom";
import styles, { layout } from "../CONSTANT/style";
import A from "../assets/DESIGN/A.mp4";
import Alphabet from "../assets/DESIGN/ALPHABET.jpg";
import BrainDead1 from "../assets/DESIGN/BrainDead1.jpg";
import BrainDead2 from "../assets/DESIGN/BrainDead2.jpg";
import BrainDead3 from "../assets/DESIGN/BrainDead3.jpg";
import E from "../assets/DESIGN/E.jpg";
// import LostInThoughts from "LOST_IN_THOUGHTS.jpg";
import Polpo from "../assets/DESIGN/POLPO.mp4";
import Sign from "../assets/DESIGN/Sign.jpg";

import VideoPlayer from "../Components/VideoPlayer";

import VideoPlayer2 from "../Components/VideoPlayer2";






<div className={`flex-start flex ${styles.flexCenter} 
md:my-0 my-15 relative`}>

{/* className="w-[100%] h-[100%] xl:w-full relative z-[5]" */}


<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 
relative"absolute z-[0] w-[40%] 
h-[35%] top-0 pink__gradient`}/>
<div className="absolute z-[1] w-[80%] 
h-[80%] rounded-full bottom-40 white__gradient"/>
<div className="absolute z-[0] w-[50%] 
h-[50%] right-20 bottom-20 blue__gradient"/>

</div>


export default function UserPageDesigns() {
  // let { id } = useParams();
  return (
   
   
   <section id="user-page" className={layout.section}>
   
   
    <div className={layout.sectionInfo}>
      {/* <img src="nico1petite.png"/> */}
      <h1 className={`${styles.heading} flex-start text-gradient text-[68px] mt-[-1370px] ml-[20px]`} >Designs </h1>
      {/* <p className="font-poppins font-semibold text-white">https://www.dropbox.com/sh/rqya6aqe8vcr4ke/AADyAi0FZHT-8seJR9tiCYaga?dl=0</p> */}
     
    </div>

    


    <section> 

    <div className={`${styles.flexCenter}`}>
    <img src={BrainDead3} alt="BrainDead3" className=" flex-start items-center object-contain cursor-pointer h-[750px] w-[750px] mt-[100px] "/>
    </div>
    </section>

    <section className="justify-beteween">
  
      <div className={`${layout} mt-[900px]
      h-100% w-100%`}>
      <VideoPlayer />
      </div>
      
      <div className=" mt-[500px] ">
      <VideoPlayer2 />
      </div>

    </section>
    
  </section>
    
  );

};








// import React from "react";
// // import { useParams } from "react-router-dom";
// import styles, { layout } from "../CONSTANT/style";
// // import ReactPlayer from "react-player";
// import VideoPlayer from "../Components/VideoPlayer";






// {/* <div className="container">
//  <h1>Home </h1> 
// <p>
//   <Link to="/UserPage"></Link>
// </p>
// <p>
//   <Link to="/Music"></Link>
// </p>
// </div> */}



// <div className={`flex-start flex ${styles.flexCenter} 
// md:my-0 my-15 relative`}>

// <div className="w-[100%] h-[100%] xl:w-full relative z-[5]"/>

// {/* <img src="music/musicImg/sign.jpg" alt="music-cover" id="cover"/> */}

// <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 
// relative"absolute z-[0] w-[40%] 
// h-[35%] top-0 pink__gradient`}/>
// <div className="absolute z-[1] w-[80%] 
// h-[80%] rounded-full bottom-40 white__gradient"/>
// <div className="absolute z-[0] w-[50%] 
// h-[50%] right-20 bottom-20 blue__gradient"/>

// </div>


// export default function UserPageDesigns() {
//   // let { id } = useParams();
//   return (
   
//      <section id="user-page" className={layout.section}>
    
    
    
    
//     <div className={layout.sectionInfo}>

//         <VideoPlayer/>
    
    
   
//    </div>
    
// </section>
    
//   );

// };

