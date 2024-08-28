import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  // other custom settings
});

export default instance;
