import React from 'react';
import { Link } from 'react-router-dom';
import UserPage from '../Pages/UserPage';




const Button5 = ({ styles }) => {
    return (
     //"Get Started" button placement 
      
     <Link to="/MidiController">
      
      <button type="button5" className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none ${styles}
      rounded-full ml-[-10px] mt-10`}>
        MIDI Controller
      </button>

      </Link>


    )
  }

  export default Button5