import axios from "axios";
const axiosinstance = axios.create({
    baseURL: 'https://ws.audioscrobbler.com/2.0',
    timeout: 100000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  
  
  export default axiosinstance;