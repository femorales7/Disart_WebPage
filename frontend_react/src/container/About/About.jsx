import React from "react";
import {Hero} from "../../components";
import "./About.scss";

const About = () => {
  return (
    <>
      <Hero
        cName="hero-mid "
        title="About Us"
        heroImg="https://images.unsplash.com/photo-1551822620-ac3afd8acd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        url="/About"
        btnClass="hidden"
      />
    </>
  );
};

export default About;
