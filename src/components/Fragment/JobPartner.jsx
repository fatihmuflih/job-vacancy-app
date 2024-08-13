import React from "react";
import Bri from "../../assets/images/Bri.png";
import Gojek from "../../assets/images/Gojek.png";
import Tiket from "../../assets/images/Tiket.png";
import Shopee from "../../assets/images/Shopee.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Sanbercode from "../../assets/images/Sanbercode.png";

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

export const JobPartner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full bg-[#F3F3F3] py-20">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <h1 className="text-center font-medium text-lg text-[#676767] mb-16">
          Trusted by 100+ world’s best companies
        </h1>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-between">
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <img src={Sanbercode} alt="Sanbercode" />
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <img src={Gojek} alt="Gojek" />
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <img src={Tiket} alt="Tiket" />
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <img src={Bri} alt="BRI" />
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <img src={Shopee} alt="Shopee" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
