import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api/v1';

const apiClient = axios.create({
   baseURL: API_BASE_URL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
});

apiClient.interceptors.request.use(
   (config) => {
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

apiClient.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default apiClient;
