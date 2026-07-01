import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const convertCode = async (data) => {
  const response = await API.post("/convert", data);
  return response.data;
};