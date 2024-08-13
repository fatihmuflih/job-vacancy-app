import React, { useState } from "react";
import { useJobs } from "../../context/JobContext";

export const SalaryFilter = () => {
  const { setSalaryRange } = useJobs();
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const handleFilterChange = () => {
    const min = minSalary ? parseInt(minSalary, 10) : 0;
    const max = maxSalary ? parseInt(maxSalary, 10) : Infinity;
    setSalaryRange([min, max]);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Min Salary"
        value={minSalary}
        onChange={(e) => setMinSalary(e.target.value)}
        onBlur={handleFilterChange}
        className="px-2 py-1 border rounded-md outline-1 outline-slate-200"
      />
      <input
        type="number"
        placeholder="Max Salary"
        value={maxSalary}
        onChange={(e) => setMaxSalary(e.target.value)}
        onBlur={handleFilterChange}
        className="px-2 py-1 border rounded-md outline-1 outline-slate-200"
      />
    </>
  );
};
