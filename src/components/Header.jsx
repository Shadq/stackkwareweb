import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="bg-opacity-30 backdrop-filter backdrop-blur-lg bg-white  z-10 font-newFont flex flex-row justify-around items-center h-16 fixed w-full top-0 left-0">
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
        <h2 className="text-3xl font-medium font-logo cursor-pointer">
          STACKWARE
        </h2>
      </Link>
      <ul className="hidden md:flex md:flex-row md:align-middle md:gap-6 text-lg cursor-pointer">
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li>Services</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        <Link to="faq" spy={true} smooth={true} offset={-100} duration={500}>
          <li>FAQ</li>
        </Link>
        <a href="https://creator.voiceflow.com/prototype/65bf916bb1559696681bd633">
          ChatBot (by Alexander Matias)
        </a>
      </ul>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
        <button className="hover:bg-gradient-to-bl from-amber-300 via-red-500 to-purple-800 bg-black text-white rounded-lg pl-7 pr-7 pt-2.5 pb-2.5">
          Contact
        </button>
      </Link>
    </nav>
  );
};

export default Header;
