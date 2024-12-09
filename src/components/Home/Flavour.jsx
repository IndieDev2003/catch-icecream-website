import React from "react";
import flavour from "../../assets/images/flavours/flavour.js";

import  { cow, flavLogo, flavBack } from "../../assets/images/flavours/flavour.js"

function Flavour() {
//   console.log(flavImg);
  return (
    <div className="px-3 py-3  h-[80vh]  w-screen">
      <div className="h-full w-full rounded-3xl  relative flex justify-between sm:items-center overflow-hidden">
        <img
          src={flavBack}
          className="absolute h-full object-cover -z-10"
          alt=""
        />
        {/* Left Side */}
        <div className="flex h-full items-end">
          <img src={cow} className="hidden md:block" alt="" />
        </div>
        {/* Right Side */}
        <div className="h-full w-full sm:w-[50%] items-center justify-center flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <img src={flavLogo} alt="" />
            <h3 className="mick text-fuchsia-600">Catch Flavours</h3>
          </div>
          <p className="mick text-2xl text-center px-10 text-gray-700 mt-3">
            Yummy Cream Catch's{" "}
            <span className="text-fuchsia-600">33 Falvour's</span>Made with
            Fresh MILK, Fresh CREAM and Natural Color
          </p>
          <div className="h-46 w-[95%] bg-whte overflow-x-scroll items-center justify-center flex px-4 gap-10 mt-10">
            {Object.entries(flavour).map(([key, flav], index) => (
              <div key={index} className="flex-shrink-0 h-full w-max text-center mick text-fuchsia-600">
                <img
                  src={flav}
                  className="object-cover h-40"
                  alt="flavour-img"
                />
                <h4>Vanilla</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flavour;
