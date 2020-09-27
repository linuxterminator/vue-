//api文件
import axios from "axios";

//地址别用localhost，否则会在本地查找数据
let baseURL = "http://121.199.22.53:8090";
// let baseURL = "http://localhost:8090";

let config = {
  baseURL: baseURL,
};

let api = axios.create(config);

export { api };
