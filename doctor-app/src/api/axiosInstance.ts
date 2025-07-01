import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-appointment-cr8f.onrender.com', // replace with your hosted backend in production
});
