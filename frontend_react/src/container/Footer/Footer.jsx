import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="firstDiv">
        <span>{new Date().getFullYear()} &copy; All Rights Reserverd.</span>
        <div className="second">
          <span className="text-blue-400 text-2xl px-1">&#9768;</span>
          by&nbsp;
          <Link
            href="/"
            className="link"
          >
            Disart
          </Link>
        </div>

        <Link href="/about">About Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
