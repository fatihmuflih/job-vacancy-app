import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Setup from "../../assets/images/Setup.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const SetupAlert = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <motion.div
          className="flex flex-col-reverse gap-4 p-10 bg-[#635BFF] rounded-xl lg:flex-row lg:gap-16 lg:px-16"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col gap-6 lg:w-1/2 lg:justify-end"
            variants={itemVariants}
          >
            <p className="text-4xl font-semibold text-white">
              Set up personalized job search alerts
            </p>
            <Link
              to="/register"
              className="py-2 px-3 font-semibold text-base text-center rounded-md bg-white text-[#635BFF] lg:w-1/3"
            >
              Sign Up
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center items-center lg:w-1/2"
            variants={itemVariants}
          >
            <img
              src={Setup}
              alt="Illustration Setup"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
