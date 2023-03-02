import React from 'react'
import { Link } from 'react-router-dom';
import UserPageDesigns from '../Pages/UserPageDesigns'


const Button3 = ({ styles }) => {
    return (
     //"Get Started" button placement 
     
     <Link to="/UserPageDesigns">
      
      <button type="button3" className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none ${styles}
      rounded-full ml-[-10px] mt-10`}>
        Projects
      </button>

      </Link>

    )
  }

  export default Button3

