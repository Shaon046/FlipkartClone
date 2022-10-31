import axios from "axios";

const URL = "";

export const authenticarteSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (err) {
    console.log("Error while calling signup api");
  }
};

export const authenticarteLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (err) {
    console.log("Error while calling login api");
    return err.response;
  }
};