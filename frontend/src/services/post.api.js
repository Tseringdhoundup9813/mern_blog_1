import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1/posts";

export const createPostApi = async (payload) => {
  console.log(payload);
  const res = await axios.post(`${BASE_URL}/create`, payload);
  return res.data;
};

export const fetcPostAPi = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
