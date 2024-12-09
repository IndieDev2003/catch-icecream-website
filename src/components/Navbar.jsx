import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner-graded.jpg";

gsap.registerEase(useGSAP);

function Navbar() {
  const navbar = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".logo-img", {
        x: -100,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      tl.from(".header h3", {
        y: -100,
        duration: 0.3,
        stagger: 0.4,
      });
      tl.from(".header .treat-head", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        delay: 0.3
        
      });
      
    },
    { scope: navbar.current }
  );

  return (
    <header
      ref={navbar}
      className="header h-fit sm:h-[65vh] relative overflow-hidden"
    >
      <div className="px-10 py-5 flex justify-between  bg-[#b400a1] sm:bg-transparent">
        <div>
          <img
            src={logo}
            className="logo-img h-16 sm:h-24 cursor-pointer"
            alt=""
          />
        </div>
        <div className="header hidden sm:flex  mick text-white items-center gap-10 text-xl">
          <h3 className="hover:text-pink-100 cursor-pointer">Ice Creams</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Flavours</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Story</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Making</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Promotions</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Contact</h3>
          <h3 className="hover:text-pink-100 cursor-pointer">Github</h3>
        </div>
      </div>

      <img
        src={banner}
        className="sm:absolute sm:-z-10 top-0 object-cover w-full"
        alt=""
      />
      <div className="treat-head mick text-white px-10">
        <h2 className="text-2xl">Creamy Treat For All</h2>
        <button className="sm:block hidden px-8 py-2 mt-3 border rounded-full hover:bg-white hover:text-[#b400a1] duration-500   transition-all ease-in">
          See All New Flavours
        </button>
      </div>
    </header>
  );
}

export default Navbar;
