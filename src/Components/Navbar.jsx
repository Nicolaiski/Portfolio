import { useState } from 'react' 
import { Link } from 'react-router-dom';
import { apple,close, google, logo, clara, menu, people01, nico1Petite } from '../assets';
import { navLinks } from '../CONSTANT';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false)
//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//         {/* <img src={logo}
//         className='w-[220px] h-[150px]'/> */}

//         {/* <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/UserPage">MidiController</a>
//           </li>
//           <li>
//             <a href="/Music">Music</a>
//           </li>
//           <li>
//           <a href="./Illustrations">Designs</a>
//           </li>
//         </ul> */}
  
//         <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
//           {navLinks.map((nav, index) => ( 

//             <li
//               key={nav.id}
//               className={`font-poppins
//               font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white `}
//             > 
//               <a href={`#${nav.id}`}>
//                   {nav.title}
//               </a>

            
      
          
//               {/* <li>
//               <a href="/">Home</a>
//               </li>
//               <li>
//               <a href="/UserPage">MidiController</a>
//               </li>
//               <li>
//               <a href="/Music">Music</a>
//               </li>
//               <li>
//               <a href="/Illustrations">UserPageDesigns</a>
//               </li>
//             */}
           
            
            
//             </li>

//            )
//          )} 
//         </ul>

//             <div className='sm:hidden flex flex-1 justify-end items-center'>
              

//                     <div
//                       className= {`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//                     > 
//                      <ul className='list-none flex flex-col justify-end items-center flex-1 '>
//                         {navLinks.map((nav, index) => ( 

//                           <li
//                             key={nav.id}
//                             className={`font-poppins
//                             font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white `}
//                           > 
//                             <a href={`#${nav.id}`}>
//                                 {nav.title}
//                             </a>
//                           </li>

//                         ))}
//                       </ul>
//                     </div>
//            </div>

//     </nav>
//   )
// }

// export default Navbar

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} className="w-[220px] h-[150px]" /> */}
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/UserPage">UserPage</a>
        </li>
      </ul> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
              font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white `}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins
                            font-normal cursor-pointer text-[16px] ${
                              index === navLinks.length - 1 ? "mr-0" : "mb-4"
                            } text-white `}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;