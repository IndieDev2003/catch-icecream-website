import React from "react";
import logo from "../assets/images/logo.png";
import banner from "../assets/images/banner-graded.jpg";

function Navbar() {
  return (
    <header className="h-fit sm:h-[65vh] relative overflow-hidden">
      <div className="px-10 py-5 flex justify-between  bg-[#b400a1] sm:bg-transparent">
        <div>
          <img src={logo} className="h-16 sm:h-24 cursor-pointer" alt="" />
        </div>
        <div className="hidden sm:flex  mick text-white items-center gap-10 text-xl">
          <h3 className="cursor-pointer">Ice Creams</h3>
          <h3 className="cursor-pointer">Flavours</h3>
          <h3 className="cursor-pointer">Story</h3>
          <h3 className="cursor-pointer">Making</h3>
          <h3 className="cursor-pointer">Promotions</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer">Github</h3>
        </div>
      </div>

      <img
        src={banner}
        className="sm:absolute sm:-z-10 top-0 object-cover w-full"
        alt=""
      />
      <div className="mick text-white px-10">
        <h2 className="text-2xl">Creamy Treat For All</h2>
        <button className="sm:block hidden px-8 py-2 mt-3 border rounded-full hover:bg-white hover:text-[#b400a1] duration-500   transition-all ease-in">
          See All New Flavours
        </button>
      </div>
    </header>
  );
}

export default Navbar;
