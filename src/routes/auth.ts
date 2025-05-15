import { axiosInstance } from "@/utils/axiosInstance";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
 
}

export const authAPI = {
  login: async (credentials: LoginCredentials) => {
    const response = await axiosInstance.post('/signin', credentials);
    return response.data;
  },

  signup: async (credentials: SignupCredentials) => {
    const response = await axiosInstance.post('/signup', credentials);
    return response.data;
  },

  signout: async () => {
    const response = await axiosInstance.post('/signout');
    return response.data;
  },

  checkAuthStatus: async () => {
    const response = await axiosInstance.post('/status');
    return response.data;
  },

 
};