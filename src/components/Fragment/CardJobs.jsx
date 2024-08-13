import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useJobs } from "../../context/JobContext";

export const CardJobs = ({ limit }) => {
  const { jobs, handleSalary, handleTime } = useJobs();
  const limitedJobs = jobs.slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {limitedJobs.length > 0 &&
        limitedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            className="bg-white px-4 py-4 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 1 }}
          >
            <Link to={`/job/${job.id}`}>
              <div className="flex flex-col h-[350px] justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex justify-center items-center bg-gray-100 max-w-[99px] min-h-[99px] p-4 rounded-lg">
                      <img
                        src={job.company_image_url}
                        alt={job.company_name}
                        className="w-full h-full bg-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-bold">{job.title}</p>
                      <div className="flex gap-2 text-sm font-semibold text-gray-400">
                        <p>{job.company_name}</p>&bull;
                        <p>{job.company_city}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                      {job.job_tenure}
                    </p>
                    <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                      {job.job_type}
                    </p>
                    <p className="px-2 py-1 bg-blue-100 rounded-md text-blue-600">
                      {job.job_status === 0 ? "Close" : "Open"}
                    </p>
                  </div>
                  <p className="text-xs">{job.job_description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <p className="text-gray-400 font-semibold">
                    {handleTime(job.updated_at)}
                  </p>
                  <span>&bull;</span>
                  <p className="font-semibold text-sm">
                    {handleSalary(job.salary_min)} -{" "}
                    {handleSalary(job.salary_max)}/Month
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
    </div>
  );
};
