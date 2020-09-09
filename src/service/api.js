import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonbox.io/box_ddb0ab5da8d69da8c315/",
});
export default api;
