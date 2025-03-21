import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/user', // Adjust if your backend URL is different
});

export default api;
