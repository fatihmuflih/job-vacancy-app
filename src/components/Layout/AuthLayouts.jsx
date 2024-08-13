import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const AuthLayout = (props) => {
  const { children, title, subtitle, background, type } = props;

  return (
    <div className="max-w-screen h-screen lg:flex bg-[#F9F9F9]">
      <div className="h-screen flex justify-center items-center lg:w-2/4">
        <div className="flex flex-col gap-6">
          <div className="flex-col gap-2 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="normal-case text-2xl font-bold flex ms-2 md:me-24 items-center mb-16">
                <i>
                  <FaArrowAltCircleRight size={35} className="text-[#635BFF] mr-1" />
                </i>
                Jobnest
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base"
            >
              {subtitle}
            </motion.p>
          </div>
          {children}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-center"
          >
            {type === "login"
              ? "Don’t have an account?"
              : "Do you have an account?"}
            {type === "login" && (
              <Link to="/register" className="font-bold text-[#635BFF]">
                {" "}
                Sign up
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-[#635BFF]">
                {" "}
                Sign in
              </Link>
            )}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden h-screen justify-center items-center lg:w-2/4 lg:flex lg:justify-center lg:items-center"
      >
        <img
          className="w-3/4 h-auto"
          alt="illustration-login"
          src={background}
        />
      </motion.div>
    </div>
  );
};