import React from "react";
import 'animate.css';
import recyling from "../assets/recycling.png";
import confused from "../assets/confused.png";
import support from "../assets/support.png";
import lock from "../assets/lock.png";
import Template  from "../Pages/Cards";
const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-2 pt-7 animate__animated  animate__fadeInDown">

          Welcome on the main page{" "}
        </h1>
        <p className="mb-4">
          The fully monthy spoofing good time no bigle cack grub fantastic.
        </p>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row animate__animated animate__fadeInUp gap-10  mt-9 transition duration-500 ease-in-out ">
        <div
          className="flex flex-col  items-center bg-transparent hover:shadow-2xl hover:shadow-indigo-200 leading-normal p-10   sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded-lg  hover:-translate-y-6 	transition duration-500 ease-in-out   cursor-pointer min-h-[270px]"
        >
          <img src={recyling} alt="" className="size-14 " />
          <h1 className="font-bold text-lg mt-4">Easy to use</h1>
          <p className="text-sm">
            Mucker plaster bugger <br />
            all mate morish are.
          </p>
          <span>Read More &#129066;</span>
        </div>
        <div
          className="flex flex-col bg-card-bg items-center bg-gradient-to-t from-indigo-50 to-slate-10 hover:shadow-2xl hover:shadow-indigo-200 leading-normal p-10   sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded-lg  hover:-translate-y-6 	transition duration-500 ease-in-out   cursor-pointer min-h-[270px]"
        >
          <img src={confused} alt="" className="size-14 " />
          <h1 className="font-bold text-lg mt-4">Easy to use</h1>
          <p className="text-sm">
            Mucker plaster bugger <br />
            all mate morish are.
          </p>
          <span>Read More &#129066;</span>
        </div>
        <div
          className="flex flex-col  items-center bg-transparent  hover:shadow-2xl hover:shadow-indigo-200 leading-normal p-10   sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded-lg  hover:-translate-y-6 	transition duration-500 ease-in-out   cursor-pointer min-h-[270px]"
        >
          <img src={lock} alt="" className="size-14 " />
          <h1 className="font-bold text-lg mt-4">Easy to use</h1>
          <p className="text-sm">
            Mucker plaster bugger <br />
            all mate morish are.
          </p>
          <span>Read More &#129066;</span>
        </div>
        <div
          className="flex flex-col  items-center bg-gradient-to-t from-slate-200 to-slate-20 hover:shadow-2xl hover:shadow-indigo-200 leading-normal p-10   sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded-lg  hover:-translate-y-6 	transition duration-500 ease-in-out   cursor-pointer min-h-[270px]"
        >
          <img src={support} alt="" className="size-14 " />
          <h1 className="font-bold text-lg mt-4">Easy to use</h1>
          <p className="text-sm">
            Mucker plaster bugger <br />
            all mate morish are.
          </p>
          <span>Read More &#129066;</span>
        </div>
      </div>
      <Template/>
    </div>
  );
};

export default Cards;
