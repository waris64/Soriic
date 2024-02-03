import React from "react";
import Girl from "../assets/girl.jpg";
import Yellow from "../assets/arrow_yellow.png";
import Blue from "../assets/arrow_blue.png";
import { GoHourglass } from "react-icons/go";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Home = () => {
  return (
    <div className=" bg-white flex flex-col  md:flex-row pt-16 px-16 gap-x-10">
      <div className="flex md:pl-5 items-center md:w-full">
        <div className="w-full md:w-full relative">
          <img src={Girl} className="rounded-lg" />
          <img
            src={Yellow}
            id="animation-2"
            className="md:size-28 size-24 absolute   md:top-44  md:right-24  top-32 right-3"
            alt=""
          />
          <img
            src={Blue}
            id="animation"
            className=" absolute md:size-24 md:left-24 size-24 md:bottom-4 -bottom-6 left-16 "
            alt=""
          />
        </div>
      </div>
      <div className="p-5">
        <button className="shadow-xl border rounded-full px-5 py-1 mb-3  uppercase">
          About Us
        </button>
        <h1 className="font-semibold text-4xl">
          It Is A Critical Component Of{" "}
          <span className=" text-blue-700	">
            {" "}
            <br />
            Modern
          </span>{" "}
          Businesses
        </h1>
        <p className="pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Loreaim Ipsum has been the industry's standard dummy
        </p>
        <div className="flex  md:px-5 py-14 flex-col md:flex-row">
          <div className="p-5">
            <div
              id="pic-1"
              className="set p-3 bg-slate-100 hover:bg-blue-700 transition-all duration-500 rounded-3xl w-14 hover:text-white "
            >
              <GoHourglass />
            </div>

            <h1 className="pt-5 font-bold">Our Ambition</h1>
            <p>
              Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is
              simply is our busi designer is our country.
            </p>
          </div>
          <div className="p-5">
            <div
              id="pic-1"
              className="set p-3 bg-slate-100 hover:bg-blue-700 transition-all duration-500 rounded-3xl w-14 hover:text-white "
            >
              <MdOutlineScreenSearchDesktop />
            </div>
            <h1 className="pt-5 font-bold ">Our Ambition</h1>
            <p>
              Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is
              simply is our busi designer is our country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
