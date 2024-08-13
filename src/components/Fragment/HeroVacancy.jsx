import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VacancyImages from "../../assets/images/VacancyImages.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
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

export const HeroVacancy = () => {
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
    <section className="max-w-screen relative">
      <div className="pt-5 lg:w-full">
        <img
          src={VacancyImages}
          alt="Hero-Background"
          className="w-full h-64 lg:h-auto"
        />
      </div>
      <motion.h1
        ref={ref}
        className="absolute w-4/5 md:w-2/4 lg:w-1/2 top-32 left-4 font-extrabold text-2xl lg:top-44 md:left-16 lg:left-24 lg:text-[40px] text-white leading-tight"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        Search between more than 75,000 Available Jobs
      </motion.h1>
    </section>
  );
};
