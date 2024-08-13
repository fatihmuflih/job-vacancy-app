import Cookies from "js-cookie";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const NavbarClient = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.div
      ref={ref}
      className="w-full py-5 z-50 fixed bg-[#F9F9F9]"
      initial="hidden"
      animate={controls}
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <NavLink
          to="/"
          className="normal-case text-2xl font-bold flex items-center"
        >
          <i>
            <FaArrowAltCircleRight size={35} className="text-[#635BFF] mr-1" />
          </i>
          Jobnest
        </NavLink>
        <div className="hidden lg:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg transition-all duration-300"
                : "text-lg hover:font-normal transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/job-vacancy"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg transition-all duration-300"
                : "text-lg hover:font-normal transition-all duration-300"
            }
          >
            Job Vacancy
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-lg transition-all duration-300"
                : "text-lg hover:font-normal transition-all duration-300"
            }
          >
            Dashboard
          </NavLink>
        </div>
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-3/5 h-full bg-white z-40">
            <div className="flex flex-col gap-4 items-start justify-start h-full px-6 pt-5">
              <div className="flex justify-between w-full py-2">
                <p className="font-bold">JOBNEST</p>
                <button
                  className="lg:hidden focus:outline-none"
                  onClick={closeMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg transition-all duration-300"
                    : "text-lg hover:font-normal transition-all duration-300"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/job-vacancy"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg transition-all duration-300"
                    : "text-lg hover:font-normal transition-all duration-300"
                }
                onClick={closeMenu}
              >
                Job Vacancy
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-lg transition-all duration-300"
                    : "text-lg hover:font-normal transition-all duration-300"
                }
                onClick={closeMenu}
              >
                Dashboard
              </NavLink>
              {Cookies.get("token") && (
                <Link
                  onClick={() => {
                    Cookies.remove("token");
                    navigate("/");
                  }}
                  className="h-10 px-6 font-medium text-base rounded-md text-white bg-[#635BFF] flex items-center"
                >
                  Logout
                </Link>
              )}
              {!Cookies.get("token") && (
                <Link
                  to="/login"
                  className="h-10 px-6 font-medium text-base rounded-md text-white bg-[#635BFF] flex items-center"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
        <div className="hidden lg:flex gap-4 items-center">
          {!Cookies.get("token") && (
            <Link
              to="/login"
              className="h-10 px-6 font-medium text-base rounded-md text-white bg-[#635BFF] flex items-center hover:bg-opacity-80"
            >
              Sign In
            </Link>
          )}
          {Cookies.get("token") && (
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white focus:outline-none"
                >
                  <img
                    src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-white border rounded shadow">
                    <ul className="py-2">
                      <li>
                        <Link
                          onClick={() => {
                            Cookies.remove("token");
                            navigate("/");
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};