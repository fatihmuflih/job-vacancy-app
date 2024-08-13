import axios from "axios";

export const register = (data, callback) => {
  axios
    .post("https://dev-example.sanbercloud.com/api/register", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const login = (data, callback) => {
  axios
    .post("https://dev-example.sanbercloud.com/api/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const changePassword = (data, callback) => {
  axios
    .post("https://dev-example.sanbercloud.com/api/change-password", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};