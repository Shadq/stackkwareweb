import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="ml-5 mr-5 bg-white h-40 font-newFont flex justify-center items-center flex-col">
      <div className="flex items-center gap-5">
        <h2 className="text-3xl font-medium font-logo">STACKWARE </h2>
        <span>© Stackware 2023, All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
