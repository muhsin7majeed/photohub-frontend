import { createContext, useState } from "react";

interface AuthContextType {
  user: any; // TODO: update type
  handleUserLogin: (user: any) => void;
  handleUserLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const handleUserLogin = (newUser: any) => {
    setUser(newUser);
  };

  const handleUserLogout = () => {
    setUser(null);
  };

  const value = { user, handleUserLogin, handleUserLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
