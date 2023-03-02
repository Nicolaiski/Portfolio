import { features } from '../CONSTANT/index';
import styles, { layout } from '../CONSTANT/style';
import Button from '../Components/Button';
import Button2 from './Button2';


// const FeatureCard = ({ icon, title, content,
// index }) => (
//   <div className={`flex  flex-center flex-1 flex-col rounded
//     xl:max-w-[195px] h-[190px]
//     "mb-4" : "mb-0" } feature-card`}> 
//     <div className={`w-[44px] h-[54px]
//       rounded-full ${styles.flexCenter}
//       bg-dimBlue`}>
//         <img src={icon} alt="icon" />
//     </div>
//         <div className="flex-1 flex flex-col mr-3">
//           <h4 className="font-poppins font-semibold
//             text-white text-[18px] leading-[23px] mb-1">
//             {title}
//           </h4>
//             <p className="font-poppins font-normal
//               text-dimWhite text-[16px] leading-[24px] 
//               mb-0"> 
//               {content}
//             </p>
//         </div>
//   </div> 
// )

const Business = () => {
  return (
    <section id="feature" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>TRASH RADIO </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>A 3D creation made with Blender, 
        cover of a set made by me, availaible on soundcloud</p>
          
          <Button2 styles="mt-10"/>
      </div>
{/*       
      <div className={`${layout.sectionImg}
        flex-col`}/>
         {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...
          feature} index={index} />
        ))}
     <div/> */}
    </section>
  )
 }



export default Business