import axios from "axios";

const myAxios = axios.create({
  baseURL: "",
});

// 请求拦截器
// myAxios.interceptors.request.use(function (config) {
//   config.headers = {
//     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
//   };
//   return config;
// });

export default myAxios;
