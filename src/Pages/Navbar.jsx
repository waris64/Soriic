import React from "react";
import 'animate.css';
import soriic from "../assets/soriic.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" animate__animated animate__fadeInDown shadow-lg w-full mt-3 flex justify-around  items-center ">
      <ul className="transition-transform transform hover:scale-110  cursor-pointer   mix-blend-normal	 duration-500 ">
        <img src={soriic} alt="sec" className="w-12" />
      </ul>
      <ul className="flex w-full">
        <Link to="/cards" className="p-5 font-bold  text-lg transition-transform transform hover:scale-110 hover:underline cursor-pointer   mix-blend-normal	 duration-500">
          Cards
        </Link>
        <Link to="/template" className="p-5 font-bold  text-lg transition-transform transform hover:scale-110 hover:underline cursor-pointer   mix-blend-normal	 duration-500">
          Template
        </Link>
        <Link to="/Task" className="p-5 font-bold  text-lg transition-transform transform hover:scale-110 hover:underline cursor-pointer   mix-blend-normal	 duration-500">
        Task
        </Link>
        <Link to="/footer" className="p-5 font-bold  text-lg transition-transform transform hover:scale-110 hover:underline cursor-pointer   mix-blend-normal	 duration-500">Footer</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
