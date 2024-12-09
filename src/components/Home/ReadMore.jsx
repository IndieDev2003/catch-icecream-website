import React from "react";
import footerImg from "../../assets/footer-img2.png";

function ReadMore() {
  return (
    <div className="h-screen w-screen flex items-center jusify-between relative">
      <img src="" className="sm:w-[40%]" alt="" />
      <div className="px-10 sm:w-[50%]">
        <h2 className="mick text-4xl text-fuchsia-700">
          Creamy Treat <br /> for All
        </h2>
        <p className="outfit">
          CATCH is one of the premium middle scale producers of fresh ice cream,
          based in Kochi, Kerala. CATCH, the business venture was founded in
          1998, by closely-knit families.
        </p>
        <button className="mt-5 transition-all duration-500 ease-in-out outfit px-10 py-3 border-fuchsia-600 border-2 rounded-full hover:bg-fuchsia-600 hover:text-white">
          Read More
        </button>
      </div>
      <img
        src={footerImg}
        className="hidden sm:block object-cover  absolute -z-10 sm:bottom-0 sm:scale-125 sm:-left-20"
        alt=""
      />
    </div>
  );
}

export default ReadMore;
