import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../services/jobs.services";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const CardDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    getDetailJob(id, (data) => {
      setJob(data);
    });
  }, [id]);

  return (
    <motion.div
      className="bg-white rounded-xl p-8 lg:w-2/3 lg:-mt-44"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-start gap-6 mb-8">
        <motion.div
          className="flex justify-center items-center bg-gray-100 max-w-[72px] min-h-[72px] p-4 rounded-lg"
          variants={containerVariants}
        >
          <img
            src={job.company_image_url}
            alt="Company Image"
            className="w-full h-full bg-cover"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
        >
          <p className="text-sm font-medium">{job.company_name}</p>
          <p className="text-2xl font-semibold">Need {job.title}</p>
        </motion.div>
      </div>
      <hr />
      <motion.div variants={containerVariants} className="my-10">
        <h1 className="text-xl font-semibold">Description</h1>
        <h2 className="text-lg font-semibold mt-8">Overview</h2>
        <p className="mt-4 text-base">{job.job_description}</p>
        <h2 className="text-lg font-semibold mt-8">Requirement</h2>
        <p className="mt-4 text-base">{job.job_qualification}</p>
      </motion.div>
    </motion.div>
  );
};
