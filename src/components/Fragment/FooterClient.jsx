import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
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

export const FooterClient = () => {
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
    <motion.div
      ref={ref}
      className="w-full py-5 bg-[#F9F9F9]"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <hr className="mb-6" />
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-16"
        variants={itemVariants}
      >
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <p className="text-base font-medium text-[#525E76] mb-4 lg:mb-0">
            Copyright &#169; 2024 Jobnest by Fatih Muflih | All Rights Reserved.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="flex gap-2 lg:flex-row lg:gap-4">
              <Link to="#" className="text-base font-medium text-[#525E76]">
                Terms
              </Link>
              <Link to="#" className="text-base font-medium text-[#525E76]">
                Privacy
              </Link>
              <Link to="#" className="text-base font-medium text-[#525E76]">
                Legal
              </Link>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <Link
                to="https://instagram.com/fatiihmuflih/"
                className="text-[#525E76]"
              >
                <FeatherIcon icon="instagram" stroke="#525E76" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/fatihmuflih/"
                className="text-[#525E76]"
              >
                <FeatherIcon icon="linkedin" fill="#525E76" stroke="#525E76" />
              </Link>
              <Link
                to="https://github.com/fatihmuflih"
                className="text-[#525E76]"
              >
                <FeatherIcon icon="github" fill="#525E76" stroke="#525E76" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};