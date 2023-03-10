import styles from '../CONSTANT/style';
import Button4 from './Button4';
import { Link } from 'react-router-dom';
import Music from '../Pages/Music';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} 
    ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 
    rounded-[20px] box-shadow `}>
      <div className="flex-1 flex flex-col mt-[-20px]">
        <h2 className={`${styles.heading2} ml-[5px]`}>Play 
        <br></br>Jeune Premier's Music 
        </h2>
    
      </div>
     
      <Link to="/Music">
      <div className={`${styles.flexCenter} sm:ml-10 ml-0
      sm:mt-0 mt-10`}>
        <Button4  />
      </div>
      </Link>
      
    </section>
)

export default CTA


