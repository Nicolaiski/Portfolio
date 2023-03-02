import { apple, bill, google } from '../assets';
import styles, { layout } from '../CONSTANT/style';
import Button5 from'./Button5';



const Billing = () => (
    <section id="product" className="mr-[480px]">
      <div className={layout.sectionImgReverse}> 
        {/* <img src={bill} alt="billing"
        className="w-[100%] h-[100%] relative z-
        [5]" /> */}
      
        <div className="absolute z-[3] -left-1/2 
        top-0 w-[50%] h-[50%] rounded-full
        white__gradient"/>
        <div className="absolute z-[0] -left-1/2 
        bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient"/>
      </div>
        
        <div >
          <h2 className={`${styles.heading2} mt-20`}>Arduino Midi Controller</h2>
          <p className={` ${styles.paragraph} max-w-[470px] mt-5` }>
          A Midi Controller Built Using Arduino Micro
          </p>
          
          <Button5 styles= "mb-[2px] rounded-full ml-[-5px]" />
           <div className="flex flex-row flex-wrap">
    
          </div> 
        </div> 
    </section>
 
)

export default Billing