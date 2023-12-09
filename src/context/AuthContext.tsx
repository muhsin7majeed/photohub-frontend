import { createContext, useState } from "react";
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
