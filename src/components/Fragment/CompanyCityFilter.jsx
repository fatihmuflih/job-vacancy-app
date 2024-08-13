import React from "react";
import { useJobs } from "../../context/JobContext";

const cities = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Bekasi",
  "Tangerang",
  "Depok",
  "Semarang",
  "Palembang",
  "South Tangerang",
  "Makassar",
  "Batam",
  "Pekanbaru",
  "Bogor",
  "Bandar Lampung",
  "Padang",
  "Malang",
  "Denpasar",
  "Samarinda",
  "Tasikmalaya",
];

export const CompanyCityFilter = () => {
  const { companyCity, setCompanyCity } = useJobs();

  return (
    <select
      value={companyCity}
      onChange={(e) => setCompanyCity(e.target.value)}
      className="px-2 py-1 border rounded-md outline-1 outline-slate-200"
    >
      <option value="">All Cities</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
