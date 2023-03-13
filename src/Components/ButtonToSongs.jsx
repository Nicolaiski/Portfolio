import React from "react";
import { Link } from "react-router-dom";
import Music from "../Pages/Music";

const ButtonToSongs = ({ styles }) => {
  return (
    //"Get Started" button placement

    <Link to="/Music">
      <button
        type="buttonToSongs"
        className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none ${styles}
      rounded-full ml-[-10px] mt-10`}
      >
        Songs
      </button>
    </Link>
  );
};
export default ButtonToSongs;