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
            className="underline
          underline-offset-2"
          >
            Fabian Morales
          </Link>
        </div>

        <Link href="/about">About me</Link>
      </div>
    </footer>
  );
};

export default Footer;
