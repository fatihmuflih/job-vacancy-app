import React from "react";
import { InputForm } from "../Element/Input";
import { useNavigate } from "react-router-dom";
import { TextareaForm } from "../Element/Textarea";
import { useJobs } from "../../context/JobContext";
import { createJob, updateJob } from "../../services/jobs.services";

export const DataForm = () => {
  const navigate = useNavigate();
  const { setFetchStatus, input, setInput, currentId, setCurrentId } =
    useJobs();

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = input;

    if (currentId === -1) {
      createJob(data, (success, response) => {
        if (success) {
          console.log("Job created successfully:", response);
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        } else {
          console.error("Failed to create job:", response);
        }
      });
    } else {
      updateJob(currentId, data, (success, response) => {
        if (success) {
          console.log("Job updated successfully:", response);
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        } else {
          console.error("Failed to update job:", response);
        }
      });
    }

    setCurrentId(-1);
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 w-full border-dashed rounded-lg dark:border-gray-700 mt-14">
        <form className="max-w-full mx-4 md:mx-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-5 md:grid-cols-2">
            <InputForm
              label="Title"
              type="text"
              name="title"
              placeholder="Fullstack Web Developer"
              value={input.title}
              onChange={handleInput}
            />
            <InputForm
              label="Company City"
              type="text"
              name="company_city"
              placeholder="Jakarta"
              value={input.company_city}
              onChange={handleInput}
            />

            <InputForm
              label="Job Type"
              type="text"
              name="job_type"
              placeholder="Onsite"
              value={input.job_type}
              onChange={handleInput}
            />
            <InputForm
              label="Job Tenure"
              type="text"
              name="job_tenure"
              placeholder="Fulltime"
              value={input.job_tenure}
              onChange={handleInput}
            />
            <TextareaForm
              rows="3"
              cols="3"
              name="job_description"
              label="Description"
              placeholder="Description"
              value={input.job_description}
              onChange={handleInput}
            />
            <TextareaForm
              rows="3"
              cols="3"
              label="Qualification"
              name="job_qualification"
              placeholder="Qualification"
              value={input.job_qualification}
              onChange={handleInput}
            />
            <InputForm
              label="Status"
              type="number"
              name="job_status"
              placeholder="0"
              max="1"
              value={input.job_status}
              onChange={handleInput}
            />
            <InputForm
              label="Company Name"
              type="text"
              name="company_name"
              placeholder="Google"
              value={input.company_name}
              onChange={handleInput}
            />

            <InputForm
              label="Salary Min"
              type="number"
              name="salary_min"
              placeholder="100000"
              value={input.salary_min}
              onChange={handleInput}
            />
            <InputForm
              label="Salary Max"
              type="number"
              name="salary_max"
              placeholder="500000"
              value={input.salary_max}
              onChange={handleInput}
            />
            <InputForm
              label="Url Image"
              type="text"
              name="company_image_url"
              placeholder="http://"
              value={input.company_image_url}
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-end">
            <button
              type={"submit"}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {currentId === -1 ? "Create Job" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
