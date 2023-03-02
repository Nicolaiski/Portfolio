import { card } from '../assets';
import styles, {layout} from '../CONSTANT/style';
import Button3 from './Button3';

const CardDeal = () => (
    
    <section id="Designs" className={layout.section}>
      <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} mt-[150px] ` }> Designs & Illustrations<br className="sm:block hidden"/>
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}
          >Made with Procreate, Blender and Paintings</p>
          
          <Button3 styles="mt-[40px] rounded-full" />
      </div>
      
      
      {/* <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>

      </div> */}
    
    </section>
  )


export default CardDeal

