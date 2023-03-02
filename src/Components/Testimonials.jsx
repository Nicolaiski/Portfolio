import { feedback } from '../CONSTANT';
import styles from '../CONSTANT/style';
import FeedBackCard from './FeedBackCard';
import Button4 from './Button4';
// import { musicIcon } from '../assets';

const Testimonials = () => (
  // <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
 <section>
      <div className="absolute z-[0px] w-[60%] h-[60%]
      -right-[50%] rounded-full blue_gradient" />
      <div className="w-full flex justify-between
        items-center md:flex-row flex-col sm:mb-16
        mb-6 relative z-[1]">
          <h1 className={ `${styles.heading2} mt-[150px] mb-[290px]` }></h1>
        <div className="w-full md:mt-0 mt:6">
          {/* <img src={musicIcon} alt="musicIcon" className="w-[15px] h-[45px]"/>  */}
          <p className={`${styles.paragraph} sm:flex ml-[0px] mt-[-330px] mb-[-10px] md:mt-[-20px] ml-[-555px] xl:ml-[-640px] mt-[0px] mb-[px]`}>
           
          </p>

        <p className={`${styles.paragraph}max-w-[470px] mt-5`}
          ></p>
       
       

        </div>
        <div>
         
      {/* <button type="button4" className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none ${styles}
      rounded-full ml-[-388px] mt-10`}>
       
      </button> */}
      {/* <button> 
        <Button4 styles="sm:flex-start ml-[-250px] md:ml-[-558px] xl:ml-[-2485px] mt-[160px] mb-[-30px]" /> 
      </button> */}
       
        </div>
      </div>
      {/* <div className="flex flex-wrap sm:justify-start
        justify-center w-full feedback-container relative z-[1]">
          {feedback.map((card) => (
            <FeedBackCard key={card.id} {...card}/>
          ))}
      </div> */}
  </section>
)

export default Testimonials  