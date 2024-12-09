import React from "react";
import footerImg1 from "../assets/footer-fruit.png";

function Footer() {
  return (
    <footer className="flex flex-col px-10 gap-4 py-5">
      <div className="relative">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 mick">
          <h3>Home</h3>
          <h3>Ice Creams</h3>
          <h3>Stroy</h3>
          <h3>Making</h3>
          <h3>Promotions</h3>
          <h3>Contact</h3>
          <h3>Github</h3>
        </div>
        <img
          src={footerImg1}
          className="hidden sm:block absolute bottom-0 right-0"
          alt=""
        />
      </div>
          <p className="outfit">2013-2017 CATCH Ice Creams. All rights reserved.</p>
          
    </footer>
  );
}

export default Footer;
