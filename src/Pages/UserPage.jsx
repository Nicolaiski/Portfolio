import React from "react";
import styles, { layout } from "../CONSTANT/style";





import A from "../assets/DESIGN/A.mp4";
import Alphabet from "../assets/DESIGN/ALPHABET.jpg";
import BrainDead1 from "../assets/DESIGN/BrainDead1.jpg";
import BrainDead2 from "../assets/DESIGN/BrainDead2.jpg";
import BrainDead3 from "../assets/DESIGN/BrainDead3.jpg";
import E from "../assets/DESIGN/E.jpg";
import LostInThoughts from "../assets/DESIGN/LOST_IN_THOUGHTS.jpg";
import Polpo from "../assets/DESIGN/POLPO.mp4";
import Sign from "../assets/DESIGN/SIGN.jpg";
import BlackLotus from "../assets/DESIGN/BlackLotus.png";
import ArduinoSketch from "../assets/Arduino/ArduinoSketch.png";
import Arduino1 from "../assets/Arduino/Arduino1.png";
import Arduino2 from "../assets/Arduino/Arduino2.jpg";
import ArduinoSketch2 from "../assets/Arduino/ArduinoSketch2.jpg";

import VideoPlayer from "../Components/VideoPlayer";
import VideoPlayer2 from "../Components/VideoPlayer2";
import VideoPlayer4 from "../Components/VideoPlayer4";






export default function UserPageDesigns() {
  // let { id } = useParams();
  return (
   
   
    <section id="user-page" className={layout.section}>
   
      <div>
   
          <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} font-bold text-gradient text-[68px] 
            mt-[-100px] ml-[30px] xl:mt-[-90px]`} >Midi Controller </h1>
             <p className=" text-gradient font-normal text-[38px] ml-[30px] ">Made With Arduino Micro</p>
          </div>
      
          <container>
            <div>
                  
                <div>



               {/* <div>
                  <div className="xl:ml-[500px] mt-[950px] mb-[300px] w-[1200px] group">
                  <button className=" mt-[100px] group-hover:my-rotate-y-180 text-center ml-[540px] items-center 
                        bg-gradient my-8 font-poppins font-bold text-gradient text-[168px] 
                        - delay-100 duration-500 rounded-full"> 
                      A </button>
                        <p className=" mt-[-50px] mb-[50px] text-[48px] font-poppins font-bold text-gradient text-center ">
                            Digital Animation <br/> Made on Procreate <br/> 2023
                        </p>
                    <VideoPlayer4 />
                   
                  </div>

                    
               </div> */}


               <section class="  mt-[300px] ml-[500px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={ArduinoSketch} alt="AS" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1800px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: h-full w-full"/>
                    </div>
                    
                    <div className=" absolute backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] bg-black mt-[100px] rounded-[50px]">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">Initial Sketch Of The Conroller</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000 mt-[100px] font-poppins font-normal text-[28px] text-gradient"> 
                          - 2 Joysticks <br/>
                          - 8 Note Buttons <br/>
                          - 3 Potentiometers <br/>
                          - 3 Switches Buttons <br/>
                          - 1 Fader <br/>
                          - 1 MIDI DIN-5 Outpout <br/> <br/><br/><br/><br/><br/>

                          Powered by Arduino Nano

                         </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>



                <section class="  mt-[500px] ml-[500px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={ArduinoSketch2} alt="AS2" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"E"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Typography Work <br/> Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>



                <section class="  mt-[500px]  mb-[500px] ml-[500px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1600px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1800px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1600px]">
                      <img src={Arduino1} alt="A1" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1400px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1400px]"/>
                    </div>
                    
                    <div className=" absolute backface-hidden my-rotate-y-180 w-[1200px] h-[1400px] mt-[100px]  rounded-[20px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Connectics"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] mt-[100px] text-gradient"> 
                          Open Circuits <br/>- 2 Potentiometers <br/> - 2 Note Buttons
                          <br/>
                          Arduino Micro <br/> <br/> <br/> 2023 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                  



                <section class="  mt-[500px] ml-[500px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1400px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1400px]">
                      <img src={Arduino2} alt="A2" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Open Circuits"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] mt-[50px] text-gradient"> 
                          Soldering <br/> Arcade Buttons
                          <br/> 2023 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                  

              

              
               
                




              



               
                
                
              


                  
                </div>
              
          
            </div>
          </container>
      </div>

    

        </section>
     
  );

};





// import styles, { layout } from "../CONSTANT/style";







// <div className={`flex-start flex ${styles.flexCenter} 
// md:my-0 my-15 relative`}>

// {/* className="w-[100%] h-[100%] xl:w-full relative z-[5]" */}


// <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 
// relative"absolute z-[0] w-[40%] 
// h-[35%] top-0 pink__gradient`}/>
// <div className="absolute z-[1] w-[80%] 
// h-[80%] rounded-full bottom-40 white__gradient"/>
// <div className="absolute z-[0] w-[50%] 
// h-[50%] right-20 bottom-20 blue__gradient"/>

// </div>


// export default function UserPage() {
//   // let { id } = useParams();
//   return (
   
//      <section id="user-page" className={layout.section}>
//     <div className={layout.sectionInfo}>
//       {/* <img src="nico1petite.png"/> */}
//       <h1 className= {styles.heading2}>Midi Controler with an Arduino Micro </h1>
//       <p className="object-contain cursor-pointer font-poppins font-semibold text-white">https://www.dropbox.com/sh/3pfcsibt49vu6jh/AAASbinM79MEp79yUAMtGQHha?dl=0/</p>
   
//     </div>


//     {/* <div>
//       <img src="arduinosketch"/>
//     </div>
//      */}
//     </section>
//   );

// };


