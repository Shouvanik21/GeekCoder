import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const detectLanguage = async (code) => {
  const response = await API.post("/detect-language", {
    code,
  });

  return response.data;
};