import React, { useEffect } from "react";
import Login from "../../assets/images/Login.png";
import Upload from "../../assets/images/Upload.png";
import { motion, useAnimation } from "framer-motion";
import Matches from "../../assets/images/Matches.png";
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

export const GettingStarted = () => {
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
    <section className="w-full bg-[#F9F9F9] py-20">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <div className="flex flex-col gap-6 items-center mb-10">
          <motion.h1
            className="text-5xl font-bold text-center"
            variants={itemVariants}
          >
            Getting started is easy
          </motion.h1>
          <motion.p
            className="text-base text-center font-medium lg:w-1/2"
            variants={itemVariants}
          >
            Create a profile and we'll match you with the best your dream
            companies and jobs in the world.
          </motion.p>
        </div>
        <motion.div
          className="p-6 bg-[#E5EDFB] rounded-xl lg:p-16"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center">
            <motion.div
              className="flex justify-center items-center lg:w-2/5"
              variants={itemVariants}
            >
              <img src={Login} alt="Illustration" />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 w-full lg:w-3/5"
              variants={itemVariants}
            >
              <h1 className="font-black text-2xl">01</h1>
              <h2 className="font-bold text-2xl">
                Register to hire up or login
              </h2>
              <p className="text-base text-justify font-medium lg:w-10/12">
                It’s totally free! You can just register if you’re new on hire
                up, follow simple registration steps and you’re ready to get
                started! If you're already a member, just sign in!
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <motion.div
            className="p-6 bg-[#E6E6F9] rounded-xl lg:p-16 lg:w-1/2"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <img src={Upload} alt="Upload-Resume" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-black text-2xl">02</h1>
                <h2 className="font-bold text-2xl">Upload your last resume</h2>
                <p className="text-base text-justify font-medium">
                  Upload your latest resume to help us find perfect jobs that
                  match with your background. Our AI will do that, but you can
                  still customize the search.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 bg-[#E5FBF2] rounded-xl lg:p-16 lg:w-1/2"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center">
                <img src={Matches} alt="Find-Job" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-black text-2xl">03</h1>
                <h2 className="font-bold text-2xl">Find your matches job</h2>
                <p className="text-base text-justify font-medium">
                  We ease your job searching by providing several jobs that
                  match with your resume. Browse them and customize as needed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
