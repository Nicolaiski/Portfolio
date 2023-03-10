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
import StickyFingers from "../assets/DESIGN/StickyFingers.jpg";
import Resko1 from "../assets/DESIGN/Resko1.jpg";
import Resko22 from "../assets/DESIGN/Resko22.png";
import Resko33 from "../assets/DESIGN/Resko33.jpg";


import VideoPlayer from "../Components/VideoPlayer";
import VideoPlayer2 from "../Components/VideoPlayer2";
import VideoPlayer3 from "../Components/VideoPlayer3";







export default function UserPageDesigns() {
  // let { id } = useParams();
  return (
   
   
    <section id="user-page" className={layout.section}>
   
      <div>
   
          <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} text-gradient font-bold  text-[68px] 
            mt-[-100px] ml-[30px] xl:mt-[-90px]`} >Designs </h1>
          </div>
      
          <container>
            <div>
                  
                <div>

                <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} text-gradient font-normal  text-[48px] 
            mt-[400px] ml-[250px] xl:mt-[300px]`} >Digital Designs </h1>
          </div>



               <section class="  mt-[250px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1800px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1800px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1600px]">
                      <img src={Sign} alt="Sign" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1800px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: h-full w-full"/>
                    </div>
                    
                    <div className=" absolute backface-hidden my-rotate-y-180 w-[1200px] h-[1600px] bg-black mt-[100px] rounded-[50px]">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Sign"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Illustration <br/> Cover For One Of My Song
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>



                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1800px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1800px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1600px]">
                      <img src={BrainDead2} alt="BD2" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1600px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1600px]"/>
                    </div>
                    
                    <div className=" absolute backface-hidden my-rotate-y-180 w-[1200px] h-[1600px] mt-[100px]  rounded-[20px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Brain Dead"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Illustration <br/> Alternative Cover For One Of My Song
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                  



                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={BrainDead3} alt="BD3" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Brain Dead"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Illustration <br/> Alternative Cover For One Of My Song
                          <br/>
                          Made On Procreate <br/> 2023 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                  

                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={E} alt="E" className=" mb-[100px] mt-[100px]
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

              
               
                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={BrainDead1} alt="BD1" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Brain Dead"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Illustration <br/> Alternative Cover For One Of My Song
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>




                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={Alphabet} alt="Alphabet" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Alphabet"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Typography Work <br/> Digital Design
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>



                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={LostInThoughts} alt="LIT" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Lost In Thoughts"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Collage <br/> Cover For One Of My Song
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                
                
                
              <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={BlackLotus} alt="BL" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Black Lotus"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Design <br/> Visual Identity for a Music Label
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>

                {/* <section class="  mt-[100px] ml-[500px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[2000px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1800px]">
                      <img src={Resko1} alt="R1" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1800px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1800px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"untitled"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Argentic Photography <br/> 35 mm
                          <br/>Montréal
                          <br/> 2021 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section> */}



                <section class="  mt-[100px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1400px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1200px]">
                      <img src={StickyFingers} alt="SF" className=" mb-[100px] mt-[100px]
                      w-[1200px] h-[1200px] cursor-pointer hover:scale-125  rounded-[50px]
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1200px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Black Lotus"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Digital Design <br/> Visual Identity for a Music Label
                          <br/>
                          Made On Procreate <br/> 2022 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>

                <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} text-gradient font-normal  text-[68px] 
            mt-[-100px] ml-[250px] mb-[250px] xl:mt-[500px]`} >Graffiti</h1>
          </div>


                <section class="  mt-[10px] ml-[250px] bg-black-gradient bg-opacity-20 rounded-[20px] w-[1400px] h-[1600px] ">
                <div className="  bg-transparent cursor-pointer group perspective  hover:opacity-100 xl:ml-[100px] ">
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000  xl:ml-[0px] w-[1200px] h-[1200px] ">
                    
                 
                    <div className=" absolute backface-hidden border-0 w-[1200px] h-[1800px]">
                      <img src={Resko22} alt="R2" className=" mb-[100px] mt-[-300px] rounded
                      w-[1200px] h-[2200px] cursor-pointer hover:scale-125 
                      xl: w-[1200px] h-[1200px]"/>
                    </div>
                    
                    <div className=" absolute rounded-[50px] backface-hidden my-rotate-y-180 w-[1200px] h-[1400px] mt-[100px] bg-black">
                      <div className=" text-gradient text-center flex flex-col items-center
                      justify-center h-full">
                          <button className=" bg-transparent -bottom-20 delay-500 duration-1000 scale-0 
                          group-hover:scale-100 group-hover:bottom-20 
                          text-[84px] text-gradient font-poppins font-bold">"Golden Sand"</button>
                          <button className=" -bottom-20 group-hover:bottom-20 scale-0 group-hover:scale-100
                          delay-1000 duration-1000
                          font-poppins font-normal text-[48px] text-gradient"> 
                          Spray Paint on brick <br/> 
                          
                          France <br/> 2018 </button>
                        
                      </div>
                    
                    </div>
                 
                  </div >
                </div>
                </section>
                


                <div className={layout.sectionInfo}>
            <h1 className={`${styles.heading} text-gradient font-normal  text-[68px] 
            mt-[-250px] ml-[250px] mb-[50px] xl:mt-[500px]`} >Animations</h1>
          </div>



                <div>
                  <div className=" xl:ml-[400px] mt-[550px] mb-[300px] w-[1200px] group">
                  <button className=" mt-[400px] group-hover:my-rotate-y-180 text-center ml-[390px] items-center 
                        bg-gradient my-8 font-poppins text-gradient text-[128px] font-bold
                        - delay-100 duration-500 rounded-full"> 
                      POLPO</button>
                     <p className=" mt-[0px] mb-[20px] text-[38px] font-poppins font-normal text-gradient text-center ">
                        Digital Animation <br/> Made on Procreate <br/> 2023
                      </p>
                    <VideoPlayer2 />
                    
                      
                      
                  </div>
                </div>

                
                <div>
                  <div className="xl:ml-[400px] mt-[950px] mb-[300px] w-[1200px] group">
                  <button className=" mt-[100px] group-hover:my-rotate-y-180 text-center ml-[540px] items-center 
                        bg-gradient my-8 font-poppins font-bold text-gradient text-[168px] 
                        - delay-100 duration-500 rounded-full"> 
                      A</button>
                        <p className=" mt-[-50px] mb-[50px] text-[48px] font-poppins font-bold text-gradient text-center ">
                            Digital Animation <br/> Made on Procreate <br/> 2023
                        </p>
                    <VideoPlayer />
                   
                  </div>

                    
               </div>


               <div>
                  <div className="xl:ml-[400px] mt-[950px] mb-[300px] w-[1200px] group">
                  <button className=" mt-[100px] group-hover:my-rotate-y-180 text-center ml-[540px] items-center 
                        bg-gradient my-8 font-poppins font-bold text-gradient text-[168px] 
                        - delay-100 duration-500 rounded-full"> 
                      A </button>
                        <p className=" mt-[-50px] mb-[50px] text-[48px] font-poppins font-bold text-gradient text-center ">
                            Digital Animation <br/> Made on Procreate <br/> 2023
                        </p>
                    <VideoPlayer3 />
                   
                  </div>

                    
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