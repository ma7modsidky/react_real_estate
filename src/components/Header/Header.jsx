import React from "react";
import "./Header.scss"
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu flexCenter">
          <a href="#">Residencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button>
            <a href="#">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;