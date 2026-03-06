import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/snacks"
});

export const getSnacks = () => API.get("/");
export const addSnack = (data) => API.post("/", data);
export const updateSnack = (id, data) => API.put(`/${id}`, data);
export const deleteSnack = (id) => API.delete(`/${id}`);