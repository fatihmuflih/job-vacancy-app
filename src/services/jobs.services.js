import axios from "axios";
import Cookies from "js-cookie";

export const getJobs = (callback) => {
  axios
    .get("https://dev-example.sanbercloud.com/api/job-vacancy")
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailJob = (id, callback) => {
  axios
    .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createJob = (data, callback) => {
  const token = Cookies.get("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .post("https://dev-example.sanbercloud.com/api/job-vacancy", data, {
      headers,
    })
    .then((res) => {
      console.log(res);
      callback(true, res.data);
    })
    .catch((error) => {
      console.log(false, error);
    });
};

export const updateJob = (id, data, callback) => {
  const token = Cookies.get("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .put(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, data, {
      headers,
    })
    .then((res) => {
      console.log(res);
      callback(true, res.data);
    })
    .catch((error) => {
      console.log(error);
      console.log(false, error);
    });
};

export const deleteJob = (id, callback) => {
  const token = Cookies.get("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
      headers,
    })
    .then((res) => {
      callback(true, res.data);
    })
    .catch((error) => {
      console.log(error);
      console.log(false, error);
    });
};
