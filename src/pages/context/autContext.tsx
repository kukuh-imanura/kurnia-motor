import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import axios from "axios";

interface User {
  id_admin: number;
  username: string;
  token: string;
  uuid: string;
  name: string;
  email: string;
  pict: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  getUserById: () => Promise<User | null>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post<User>("https://bengkel-api-ruby.vercel.app/api/auth/loginAdmin", { username, password });
      // console.log("API Response:", res.status, res.data);
      // SET TOKEN
      // localStorage.setItem("token", res.data.uuid);
      const user = res.data;
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      throw new Error("Login failed");
    }
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };
  const getUserById = async () => {
    try {
      const res = await axios.get(`https://bengkel-api-ruby.vercel.app/api/admin/find/${currentUser?.id_admin}`);
      // console.log({ data: res });

      if (res.data.length > 0) {
        const userData = res.data[0]; // Ambil objek pertama dari array
        return {
          name: userData.name,
          email: userData.email,
          username: userData.username,
          pict: userData.pict,
        } as User;
      } else {
        console.error("User data not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  return <AuthContext.Provider value={{ currentUser, login, logout, getUserById }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
