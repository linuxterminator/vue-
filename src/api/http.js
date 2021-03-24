import axios from "axios";

let config = {
  baseURL: "http://121.199.22.53:8090",
};

let api = axios.create(config);

export default api;