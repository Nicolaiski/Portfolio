import styles from '../CONSTANT/style';
// import { logo } from '../assets';
import { footerLinks } from '../CONSTANT';
import { Link } from 'react-router-dom';

const Footers= () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} 
    flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col 
      mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
       
        </div>
    <h1 className={`${styles.title} font-poppins flex-col text-white`}></h1>
    <div>
        <p className="flex-col text-white">
          <Link to = "https://www.instagram.com/_jeunepremier_/">Instagram</Link>
         </p>
         <p className="flex-col text-white">
          <Link to = "https://soundcloud.com/user-489325442">SoundCloud</Link>
         </p>
    </div>


        {/* <div className="flex-[1.5] w-full flex flex-row justify-between
        flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0
            my-4 min-w-[15Opx]">
                <h4 className="font-poppins font-medium text-[18px]
                leading-[27px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((links, index) => (
                    
                    <li key={links.name}
                    className={`font-poppins font-normal text-[16px] 
                    leading-[24px] text-dimWhite hover:text-secondary
                    cursor-pointer rounded-full ${index !== footerLink.links.length - 1 ? 
                    'mb-4' : 'mb-0'}`}
                    >
                      {links.name}

                      
                    </li>
                  ))}
                </ul>
              </div>
          ))}

        </div> */}
      </div>

      <div className="w-full flex justify-between items-center md:flex-row
        flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center
            text-[18px] leading-[27px] text-white">
            Portfolio 2023, Computation Arts.
          </p>
       
    
      </div>
   
  </section>
)

export default Footers