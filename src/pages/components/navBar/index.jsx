import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ditaLogo from "../../../assets/ditaLogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="hidden xl:block py-3 top-0 left-0 fixed w-full px-8 xl:px-20 bg-opacity-90 bg-gray-800 backdrop-blur-md z-20">
        <div className="flex justify-between items-center">
          <div>
            <img src={ditaLogo} alt="" className="w-20" />
          </div>
          <div className="flex items-center gap-8 text-white text-sm">
            <button
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-blue-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-blue-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="cursor-pointer hover:text-blue-500"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:text-blue-500"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer hover:text-blue-500"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-blue-500"
            >
              Contact
            </button>
            {/* TODO: ADD THEME TOGGLER */}
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {!toggle && (
        <div
          className="xl:hidden h-[8vh] top-0 left-0 flex justify-between items-center w-full fixed px-[1em] py-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div>
            <a href="#home">
              <img src={ditaLogo} alt="" className="w-[100px]" />
            </a>
          </div>
          <div>
            <AiOutlineMenu
              className="text-3xl cursor-pointer text-white"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      )}

      {toggle && (
        <div
          className="xl:hidden h-[100vh] top-0 left-0  w-full fixed px-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 2,
          }}
        >
          <div className="flex justify-between items-center pt-[10px]">
            <div>
              <a href="#home">
                <img src={ditaLogo} alt="" className="w-[100px]" />
              </a>
            </div>
            <div>
              <AiOutlineClose
                className="text-4xl cursor-pointer text-white"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          {/* links */}
          <div className="pt-[1em]">
            <ul className="flex flex-col gap-[40px] text-end text-white text-sm">
              <li className="" onClick={() => setToggle(false)}>
                <a href="#home" className="hover:text-[#02AEEE]  no-underline">
                  Home
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#about"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  About
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#events"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Events
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#services"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Services
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#projects"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Projects
                </a>
              </li>
              <li onClick={() => setToggle(false)}>
                <a
                  href="#contact"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </nav>
  );
};

export default Navbar;
