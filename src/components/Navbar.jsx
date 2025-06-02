import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/cargo-ton-logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants/navLinks";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" fixed w-screen z-50 mt-3 px-2">
      <div
        className="
          bg-ct-black/90
          shadow 
          container 
          mx-auto 
          px-4 
          py-3 
          flex 
          items-center 
          justify-center 
          rounded-full"
      >
        <div className="w-[1200px] h-full flex justify-between">
          <Link
            to="/"
            className="
            flex 
            items-center 
            space-x-2 
            font-bold 
            text-lg 
            text-ct-black"
          >
            <img src={Logo} alt="" width={200} />
          </Link>
          <div className="flex gap-2">
            <nav
              className="
              hidden 
              md:flex 
              space-x-6 
              text-sm 
              font-medium 
              items-center"
            >
              {navLinks
                ? navLinks.map((link, index) => (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-ct-black bg-ct-yellow rounded-full px-4 py-1"
                          : "text-ct-white "
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))
                : null}
            </nav>
            <div className="flex items-center ml-2">
              <div
                className="
              hidden 
              md:flex 
              items-center 
              space-x-2"
              >
                <button
                  className="
                    bg-ct-black 
                    hover:bg-ct-yellow-hover 
                    hover:text-ct-black 
                    text-ct-yellow
                    outline-1
                    outline-ct-yellow
                    font-semibold 
                    text-base
                    px-4 
                    py-2 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center
                    cursor-pointer
                    space-x-2 
                    gap-2
                    transition 
                    duration-200"
                >
                  <FaCircleUser />
                  Sign In
                </button>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-ct-yellow">
                  {isOpen ? (
                    <IoClose size={24} />
                  ) : (
                    <GiHamburgerMenu size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
