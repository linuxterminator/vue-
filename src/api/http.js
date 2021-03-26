import axios from "axios";

let config = {
  baseURL: "http://121.199.22.53:8090",
};

let api = axios.create(config);

// function LoginRequest(url,data){
//   api.post(url,data){}.then(){}
// }


export default api;