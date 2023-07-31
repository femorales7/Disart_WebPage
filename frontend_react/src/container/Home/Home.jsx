import React from "react";
import {Hero, Products, SlideImages} from "../../components";

// import "../../components/Hero/Hero.scss"
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={images.MainPage}
        title="Design and Class"
        text="The best option for your business"
        buttonText="lets try"
        url="/"
        btnClass="show"
      />
      <Products/>
      
    </>
  );
};

export default Home;
