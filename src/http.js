//api文件
import axios from "axios";

let baseURL = "http://localhost:8090/";

let config = {
  baseURL: baseURL,
};

let api = axios.create(config);

export { api };
