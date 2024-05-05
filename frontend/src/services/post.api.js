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
export const fetchSinglePostApi = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};
export const deletePostApi = async (id) => {
  const res = await axios.delete(`${BASE_URL}/delete/${id}`);
  return res.data;
};

export const updatePostApi = async ({ id, title, description }) => {
  console.log(title, id, description);
  const res = await axios.put(`${BASE_URL}/${id}`, {
    title: title,
    description: description,
  });
  return res.data;
};
