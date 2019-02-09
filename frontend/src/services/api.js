import axios from "axios";

const api = axios.create({
  baseUrl: "http://loaclhost:3001"
});

export default api;
