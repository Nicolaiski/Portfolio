import styles from '../CONSTANT/style';
import { clara, discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  
  <section id="home" className={`flex md:flex-row flex-col styles.paddingY`}>
    <div className={`flex-1} ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-[-50px]">
      <img src={discount} alt="discount" className="w-[32px] h-[32px]" />  
       <p className={`$(styles.paragraph) ml-2 mt-`}> 
         <span className="text-white">Fall
         </span>Term {" "}
         <span className="text-white">2023
         </span> Application
       </p>
      </div> */}

        <div className="flex flex-row 
        justify-between items center w-full">
          <h1 className="flex-1 font-poppins 
          font-semibold ss:text-[72px] text-
          [52px] text-white ss:leading-[100px]
          leading-[55px]"> 
          Nicolas Gaudu Véloppé <br className="sm:block 
          hidden" /> {" "}
          <span 
          className="text-gradient">Portfolio
          </span> {" "}
          </h1>
          {/* <div className="ss:flex-center h-[45px] w-[145px] md:mr-4
          mr-0">
              <GetStarted />
           </div> */}
        </div>

       <h1 className="font-poppins 
          font-semibold ss:text-[68px] text-
          [42px] text-white ss:leading-[100px]
          leading-[55px] w-full">Fall Term 2023.</h1>
          <p className={`${styles.paragraph} max-w-
          [470px] mt-5`}> This is a presentation of my Portfolio, 
          and some of my projects for the BFA computational Arts</p>

    
    </div>

        <div className={`flex-start flex ${styles.flexCenter} 
        md:my-0 my-15 relative`}>
        {/* <img src={robot} alt="billing"
        className="w-[100%] h-[100%] xl:w-full relative z-[5]"/> */}

        {/* <img src="music/musicImg/sign.jpg" alt="music-cover" id="cover"/> */}

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 
        relative"absolute z-[0] w-[40%] 
        h-[35%] top-0 pink__gradient`}/>
        <div className="absolute z-[1] w-[80%] 
        h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] 
        h-[50%] right-20 bottom-20 blue__gradient"/>
        </div>
      
      <div className={'hidden ${styles.flexCenter }'}>
       <GetStarted />
    </div>
  </section>
  
)


export default Hero