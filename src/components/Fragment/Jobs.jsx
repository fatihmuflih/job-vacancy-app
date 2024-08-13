import { CardJobs } from "./CardJobs";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Jobs = () => {
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
    <section className="w-full bg-[#F3F3F3] py-16">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <motion.div
          className="flex flex-col gap-6 items-center mb-10"
          variants={itemVariants}
        >
          <motion.h1 className="text-5xl font-bold text-center">
            Discover the best jobs
          </motion.h1>
          <motion.p className="text-base text-center font-medium lg:w-1/2">
            Start your career with the best companies in the world. We ensure
            you get the best job possible
          </motion.p>
        </motion.div>
        <CardJobs limit={6} />
        <motion.div
          className="flex justify-center items-center gap-1 mt-16"
          variants={itemVariants}
        >
          <p className="flex gap-2">Did not find what you’re looking for?</p>
          <Link to="/job-vacancy" className="text-indigo-500">
            View all jobs
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
