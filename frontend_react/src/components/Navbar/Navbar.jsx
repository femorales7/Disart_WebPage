import React, { useState, Component } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.scss";

// const Navbar = () => {
  class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  // const [toggle, setToggle] = useState(false);
  render(){
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="menu-icons" onClick={this.handleClick} >
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
        
      </div>

      <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
              {/* <div /> */}
            </li>
          );
        })}
      </ul>

    </nav>
  );
}
  }

export default Navbar
