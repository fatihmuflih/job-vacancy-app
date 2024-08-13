import React from "react";
import { useJobs } from "../../context/JobContext";

export const JobTenureFilter = () => {
  const { jobTenure, setJobTenure } = useJobs();

  return (
    <select
      value={jobTenure}
      onChange={(e) => setJobTenure(e.target.value.toLowerCase())}
      className="px-2 py-1 border rounded-md  outline-1 outline-slate-200"
    >
      <option value="">All Tenures</option>
      <option value="fulltime">Fulltime</option>
      <option value="freelance">Freelance</option>
      <option value="contract">Contract</option>
    </select>
  );
};
