import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import flavour from "../../assets/images/flavours/flavour.js";
import {
  cow,
  flavLogo,
  flavBack,
} from "../../assets/images/flavours/flavour.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Flavour() {
  const boxRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 0.5,
          // markers: true,
        },
      });

      tl.from(boxRef.current, {
        // y: 200,
        x: 200,
      });

      gsap.to(".flav-scroll", {
        x: -200,
        repeat: -1,
        duration: 1
        // yoyo: true,
      });
    },
    { scope: boxRef.current }
  );

  return (
    <div ref={boxRef} className="px-3 py-3  h-[80vh]  w-screen">
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
          <div className="scroll h-46 w-[95%] bg-whte overflow-x-scroll items-center justify-center flex px-4 gap-10 mt-10">
            {Object.entries(flavour).map(([key, flav], index) => (
              <div
                key={index}
                className="flav-scroll flex-shrink-0 h-full w-max text-center mick text-fuchsia-600"
              >
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
