import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Checklist from "../../assets/images/Checklist.png";
import HeroImage from "../../assets/images/HeroImage.png";

const containerVariants = {
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

export const Hero = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <motion.div
        className="container mx-auto px-4 md:px-8 lg:px-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col-reverse mx-auto md:pt-16 lg:pt-32 lg:flex-row">
          <motion.div
            className="flex flex-col gap-10 lg:w-1/2"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-5xl w-full">
                The Best Place to Find Your Next Job
              </h1>
              <p className="font-medium text-base w-full">
                Jobnest is a platform designed to help job seekers find career opportunities that match your skills
                and interests. This platform provides various features to facilitate the job search process, such as
                searching by industry, location and type of job.
              </p>
            </div>
            <div className="hero-content flex-col justify-start lg:flex-row mt-2 mb-2">
              <Link to="/job-vacancy" className="text-white bg-[#635BFF] hover:bg-opacity-80 focus:ring-4 focus:ring-[#635BFF] font-medium rounded-lg text-base px-6 py-3">
                Explore Job
              </Link>
            </div>
            <div className="w-full flex gap-6 md:justify-center lg:justify-start">
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6">
                  <img
                    src={Checklist}
                    alt="Checklist"
                    className="w-full h-full"
                  />
                </div>
                <p className="font-medium text-base">Easy to setup</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src={Checklist}
                    alt="Checklist"
                    className="w-full h-full"
                  />
                </div>
                <p className="font-medium text-base">Complete job vacancies</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:w-1/2 lg:justify-end"
            variants={itemVariants}
          >
            <div>
              <img src={HeroImage} alt="illustration-jumbotron" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};