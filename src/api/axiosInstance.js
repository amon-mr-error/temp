// src/api/axiosInstance.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/user'
});
