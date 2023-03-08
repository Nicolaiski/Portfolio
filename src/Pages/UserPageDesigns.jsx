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


                  <div>
                    
                  <i 
                    className="cursor-pointer 
                    opacity-25 hover:opacity-100">
                      
                      <img src={Sign} alt="SIGN"  className=" mb-[185px] mt-[200px]
                       cursor-pointer hover:scale-125 xl:w-full mb-[373px] "/> 
                      
                    </i>
                  </div>
                  


                  <div>
                   <i 
                   className="cursor-pointer opacity-25
                  hover:opacity-100">
                    
                    <img src={BrainDead2} alt="BrainDead2" className=" mb-[187px] mt-[185px] cursor-pointer 
                    w-90 h-90 hover:scale-125 xl:w-full mb-[374px]"/>
                  
                   </i>
                  </div>
                  <div>
                    <i>
                      <img src={BrainDead3} alt="BrainDead3" className="  mb-[100px] mt-[100px]
                      w-90 h-90 cursor-pointer hover:scale-125 opacity-25 hover:opacity-100 
                      xl:w-full mb-[280px]"/>
                    </i>
                  </div>
                  <img src={E} alt="E" className="  mb-[140px] mt-[140px] object-container 
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mb-[280px]"/>
                  <img src={BrainDead1} alt="BrainDead1" className="  mb-[140px] mt-[100px] object-container
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mb-[170px]"/>
                  <img src={Alphabet} alt="Alphabet" className=" mb-[100px] mt-[100px] object-container
                  cursor-pointer w-90 h-90 hover:scale-125 opacity-25 hover:opacity-100 
                  xl:w-full mt-[280px] "/>
                  
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









