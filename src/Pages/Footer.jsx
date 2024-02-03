import React from "react";
import Apple from "../assets/Apple.png";
import Fb from "../assets/facebook.png";
import Tw from "../assets/twitter.png";
import Pin from "../assets/pinterest.png";
import LinkedIn from "../assets/linkedin.png";
import PlayStore from "../assets/playstore.png";
import Email from "../assets/email.png";
import Map from "../assets/map.png";
import Phone from "../assets/phone.png";

const Footer = () => {
  return (
   
      <div className=" flex flex-col items-left md:flex-row   gap-y-8 md:justify-between  p-5 ">
        <div className=" flex flex-col md:items-center leading justify-center items-left  ">
          <div className="flex justify-start">
            <img src={Apple} className="size-7" alt="AppleIcon" />
            <h1 className="font-bold text-xl ">Appie</h1>
          </div>
          <p className="pt-4 pb-4">
            Appie wordpress theme is the last <br></br> theme you will ever have.
          </p>
          <a href="#" className="gap-3 font-bold ">
            ReadMore &#129066;
          </a>
          <div className="flex gap-2 pt-4 justify-start ">
            <img src={Fb} className="size-7" alt="fb" />
            <img src={Tw} className="size-7" alt="twitter " />
            <img src={Pin} className="size-7" alt="pinterest" />
            <img src={LinkedIn} className="size-7" alt="linkedIn" />
          </div>
        </div>
        <div className="flex  gap-x-36 -mr-16  md:flex-row flex-col">
        <div className="">
          <h1 className="font-bold text-xl pb-5 pt-4">Company</h1>
          <div className="flex flex-col  leading-7">
            <a href="">About Us</a>
            <a href="">Service</a>
            <a href="">Case Studies</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl pb-3  pt-4">Support</h1>
          <div className="flex flex-col  leading-7">
            <a href="">Community</a>
            <a href="">Resources</a>
            <a href="">Faqs</a>
            <a href="">Privacy Policy</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="flex flex-col justify-end  ">
          <h1 className="font-bold text-xl pb-3  pt-4">Get In Touch</h1>
          <div className="flex flex-col items-left justify-left ">
            <div className="flex items-left justify-left gap-3  leading-7 mt-2    ">
              <img src={Email} className="size-5" alt="" />
              <a href="">support@appie.com</a>
            </div>
            <div className="flex items-left justify-left  gap-3  leading-7 mt-2">
              <img src={Phone} className="size-5" alt="" />
              <a href="">+(642)34276244</a>
            </div>
            <div className="flex items-left justify-left gap-3 w-1/2 leading-7 mt-2">
              <img src={Map} className="size-5" alt="" />
              <a href="">442 Belle Terre St Floor, 7 San Fransisco, AV 4206</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Footer;
