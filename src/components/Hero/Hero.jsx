import React from "react";
import "./Hero.css"
import heroImg from "../../assets/hero__img.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <div className="hero__card">
            <span className="hero__span">Welcome to GreenShop</span>
            <h1 className="hero__title">
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p className="hero__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button className="header__navbar-btn">SHOP NOW</button>
          </div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
