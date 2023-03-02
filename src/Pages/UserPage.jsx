import React from "react";
// import { useParams } from "react-router-dom";
import styles, { layout } from "../CONSTANT/style";
// import nico1Petite from "../assets/nico1Petite.png";






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


export default function UserPage() {
  // let { id } = useParams();
  return (
   
     <section id="user-page" className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* <img src="nico1petite.png"/> */}
      <h1 className= {styles.heading2}>Midi Controler with an Arduino Micro </h1>
      <p className="font-poppins font-semibold text-white">https://www.dropbox.com/sh/3pfcsibt49vu6jh/AAASbinM79MEp79yUAMtGQHha?dl=0/</p>
   
    </div>


    {/* <div>
      <img src="arduinosketch"/>
    </div>
     */}
    </section>
  );

};


