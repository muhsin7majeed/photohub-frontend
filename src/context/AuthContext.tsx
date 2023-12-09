import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ISignInResponse } from "types/user";
import storage from "utils/storage";

interface AuthContextType {
  user: ISignInResponse | null;
  handleUserLogin: (user: ISignInResponse) => void;
  handleUserLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ISignInResponse | null>(null);

  useEffect(() => {
    const token = storage.getToken();

    if (token) {
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = `${token}`;

        return config;
      });

      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const { data } = await axios.get("/users/me");

      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogin = (user: ISignInResponse) => {
    setUser(user);
    storage.setToken(user.token);
  };

  const handleUserLogout = () => {
    setUser(null);
    storage.clearToken();
  };

  const value = { user, handleUserLogin, handleUserLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
