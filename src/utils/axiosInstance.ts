import axios from "axios";

 
const BASE_URL =  "https://api.aisigroup.ge/api" 

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error?.response?.status, error?.response?.data);
 
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('token');
      if (typeof window !== 'undefined') {
        if (!window.location.pathname.includes('/signin')) {
          window.location.href = '/signin';
        }
      }
    }
    
    return Promise.reject(error);
  }
);