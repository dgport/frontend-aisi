"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { authAPI } from "@/routes/auth";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false);
        return;
      }

      const response = await authAPI.checkAuthStatus();

      if (response.user) {
        setUser(response.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        Cookies.remove("token");
      }
    } catch (error) {
      console.error("Auth verification failed:", error);
      setUser(null);
      setIsAuthenticated(false);
      Cookies.remove("token");
    } finally {
      setIsLoading(false);
    }
  };

  const login = (token: string) => {
    Cookies.set("token", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    checkAuth();
  };

  const logout = async () => {
    try {
      await authAPI.signout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      Cookies.remove("token");
      setUser(null);
      setIsAuthenticated(false);
      router.push("/");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
