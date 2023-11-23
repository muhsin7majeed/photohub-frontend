import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: any; // TODO: update type
  login: (user: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = (newUser: any, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
  };

  const value = { user, login, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
