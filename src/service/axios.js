import axios from 'axios';

axios.defaults.timeout = 10000;

axios.defaults.baseURL = 'https://api.xxx.com';

// todo -> set: axios 拦截 https? 请求发送
// axios.interceptors.request.use(config => {
//   return config;
// }, error => {
//   console.log( 'axios 请求发送的错误: ', err, err.response );
//   return Promise.reject(error);
// });

// todo -> set: axios 拦截 https? 请求接收
axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.log( 'axios 拦截接收的请求错误: ', error, error.response );
  return Promise.reject(err);
});

export default axios;