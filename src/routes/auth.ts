import { axiosInstance } from "@/utils/axiosInstance";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token?: string;
  data?: {
    id: string;
    email: string;
  };
  user?: {
    userId: string;
    email: string;
  };
}

export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
   
      const response = await axiosInstance.post('/signin', credentials);     
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      console.error('❌ Login failed:', error);
      throw error;
    }
  },

  signup: async (credentials: SignupCredentials): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.post('/signup', credentials);
      return response.data;
    } catch (error) {
      console.error('❌ Signup failed:', error);
      throw error;
    }
  },

  signout: async (): Promise<AuthResponse> => {
    try {
 
      const response = await axiosInstance.post('/signout');
      localStorage.removeItem('token');
      return response.data;
    } catch (error) {
      console.error('❌ Signout error:', error);
      localStorage.removeItem('token');
      throw error;
    }
  },

  checkAuthStatus: async (): Promise<AuthResponse> => {
    try {
      const response = await axiosInstance.get('/status');
      return response.data;
    } catch (error) {
      console.error('❌ Auth status check failed:', error);
      throw error;
    }
  },
};