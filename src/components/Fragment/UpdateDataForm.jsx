import React from "react";
import { InputForm } from "../Element/Input";
import { TextareaForm } from "../Element/Textarea";
import { useJobs } from "../../context/JobContext";

export const UpdateDataForm = () => {
  const { state, handleFunction } = useJobs();
  const { inputEdit } = state;
  const { handleEdit } = handleFunction;

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 w-full border-dashed rounded-lg dark:border-gray-700 mt-14">
        <form className="max-w-full mx-4 md:mx-10">
          <div className="grid grid-cols-1 gap-4 mb-5 md:grid-cols-2">
            <InputForm
              label="Title"
              type="text"
              name="title"
              placeholder="Fullstack Web Developer"
              value={inputEdit.title}
              onChange={handleEdit}
            />
            <InputForm
              label="Company City"
              type="text"
              name="company_city"
              placeholder="Jakarta"
              value={inputEdit.company_city}
              onChange={handleEdit}
            />

            <InputForm
              label="Job Type"
              type="text"
              name="job_type"
              placeholder="Onsite"
              value={inputEdit.job_type}
              onChange={handleEdit}
            />
            <InputForm
              label="Job Tenure"
              type="text"
              name="job_tenure"
              placeholder="Fulltime"
              value={inputEdit.job_tenure}
              onChange={handleEdit}
            />
            <TextareaForm
              rows="3"
              cols="3"
              name="job_description"
              label="Description"
              placeholder="Description"
              value={inputEdit.job_description}
              onChange={handleEdit}
            />
            <TextareaForm
              rows="3"
              cols="3"
              name="job_qualification"
              label="Qualification"
              placeholder="Qualification"
              value={inputEdit.job_qualification}
              onChange={handleEdit}
            />
            <InputForm
              label="Status"
              type="number"
              name="job_status"
              placeholder="0"
              max="1"
              value={inputEdit.job_status}
              onChange={handleEdit}
            />
            <InputForm
              label="Company Name"
              type="text"
              name="company_name"
              placeholder="Google"
              value={inputEdit.company_name}
              onChange={handleEdit}
            />

            <InputForm
              label="Salary Min"
              type="number"
              name="salary_min"
              placeholder="100000"
              value={inputEdit.salary_min}
              onChange={handleEdit}
            />
            <InputForm
              label="Salary Max"
              type="number"
              name="salary_max"
              placeholder="500000"
              value={inputEdit.salary_max}
              onChange={handleEdit}
            />
            <InputForm
              label="Url Image"
              type="text"
              name="company_image_url"
              placeholder="http://"
              value={inputEdit.company_image_url}
              onChange={handleEdit}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
