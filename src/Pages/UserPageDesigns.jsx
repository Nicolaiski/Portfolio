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


import VideoPlayer from "../Components/VideoPlayer";
import VideoPlayer2 from "../Components/VideoPlayer2";






export default function UserPageDesigns() {
  // let { id } = useParams();
  return (
   
   
    <section id="user-page" className={layout.section}>
   
      <div>
   
          <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} text-gradient text-[68px] 
            mt-[-100px] ml-[20px] xl:mt-[-90px]`} >Designs </h1>
          </div>
      
          <container>
            <div>
                  
                <div>


                <div className=" xl:ml-[500px] w-[1600px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={Sign} alt="Sign" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                        group-hover:scale-100 group-hover:bottom-20 
                        text-[84px] text-gradient font-poppins font-bold">"Sign"</button>
                        <button class=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                        delay-1000 duration-1000
                        font-poppins font-normal text-[48px] text-gradient"> 
                        Digital Illustration <br/> Cover For One Of My Song
                        <br/>
                        Made On Procreate <br/> 2022 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>
                  


                  <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={BrainDead2} alt="BrainDead2" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                        bg-transparent delay-500 duration-1000
                        text-[84px] font-poppins font-bold text-gradient">
                        "Brain Dead"</button>
                        <button class=" bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-1000 duration-1000
                        my-2 font-poppins font-normal text-[48px] text-gradient"> 
                        An alternative Digital Illustration <br/> 
                        For One Of My Song<br/>
                        Made On Procreate <br/> 2022 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>
               
                 <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={BrainDead3} alt="BrainDead3" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class=" bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100
                        delay-500 duration-1000
                        text-[84px] font-poppins font-bold text-gradient">"Brain Dead"</button>
                        <button class=" bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-1000 duration-1000
                        font-poppins font-normal text-[48px] text-gradient"> An alternative Digital Illustration <br/> made with Procreate 
                        for one of my song cover <br/> 2023 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>

                <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={E} alt="E" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class=" group-hover:bottom-20 rounded-full scale-0 group-hover:scale-100 
                        px-6 py-2 text-[84px] text-gradient font-poppins font-bold bg-transparent -bottom-20 delay-500 duration-1000 ">"E"</button>
                        <button class=" group-hover:bottom-20 rounded-full scale-0 group-hover:scale-100 
                        px-6 py-2  font-poppins font-normal text-[48px] text-gradient bg-transparent -bottom-20 delay-1000 duration-1000"> Typography work, <br/> Made On Procreate <br/> 2022 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>


                <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={BrainDead1} alt="BrainDead1" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class=" bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-500 duration-1000
                        text-[84px] font-poppins font-bold text-gradient">
                        "Brain Dead"</button>
                        <button class="bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-1000 duration-1000
                        text-[48px] font-poppins font-bold text-gradient"> Typography work, <br/> Alternative Cover  <br/> Made On Procreate. <br/> 2022 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>

                <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={Alphabet} alt="Alphabet" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-gradient text-center flex flex-col items-center
                    justify-center h-full">
                        <button class="bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-500 duration-1000
                        text-[84px] font-poppins font-bold text-gradient">"Alphabet"</button>
                        <p class="bg-transparent -bottom-20 group-hover:bottom-20
                        scale-0 group-hover:scale-100 delay-1000 duration-1000
                        text-[48px] font-poppins font-bold text-gradient"> Typography work, <br/> Made On Procreate. <br/> 2022 </p>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>

                <div className=" xl:ml-[500px] w-[1200px] h-[1200px] bg-transparent cursor-pointer group perspective  hover:opacity-100 ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 xl:ml-[0px]  w-[1200px] h-[1200px] duration-1000">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-full h-full">
                      <img src={LostInThoughts} alt="LIT" className=" mb-[100px] mt-[100px]
                      w-full h-full cursor-pointer hover:scale-125  
                      xl: h-full w-full"/>
                    </div>
                    <div className=" absolute backface-hidden my-rotate-y-180 w-full h-full bg-black">
                    
                    <div className=" text-white text-center flex flex-col items-center
                    justify-center h-full ">
                        <button class=" bg-transparent px-6 py-2 text-[84px] text-gradient font-poppins 
                        font-bold -bottom-20 delay-500 duration-1000
                        group-hover:bottom-20 rounded-full scale-0 group-hover:scale-100">"Lost In Thoughts"</button>
                        <button class=" bg-transparent my-2 font-poppins font-normal text-gradient text-[48px] 
                        -bottom-20 delay-1000 duration-1000
                        group-hover:bottom-20 rounded-full scale-0 group-hover:scale-100"> 
                        Collage <br/> Made On Procreate. <br/> 2022 </button>
                      
                    </div>
                    
                    </div>
                 
                  </div >
                </div>
                  
           
              
                  
                </div>
              
          
            </div>
          </container>
      </div>

    

        </section>
     
  );

};



{/* 
                <section>

                <div className="mt-[950px] h-200% w-200% mr-[700px]">
                  <VideoPlayer2 />
                  <VideoPlayer />
                  </div>

                </section> */}

                  {/* <VideoPlayer2 className="mt-[50px]"/>
                <VideoPlayer /> */}







///////////////////////// OLD IMAGES  ///////////////////////// 



       {/* <img src={E} alt="E" className="  mb-[140px] mt-[140px] object-container 
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mb-[280px]"/> */}

       {/* <img src={BrainDead1} alt="BrainDead1" className="  mb-[140px] mt-[100px] object-container
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mb-[170px]"/> */}

       {/* <img src={Alphabet} alt="Alphabet" className=" mb-[100px] mt-[100px] object-container
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mt-[280px] "/> */}

        {/* <img src={LostInThoughts} alt="LIT" className=" mb-[100px] mt-[100px] object-container
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mt-[280px] "/> */}