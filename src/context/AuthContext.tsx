import { ReactElement, createContext, useEffect, useState } from "react";
import axios from "axios";

import FullScreenLoader from "components/loaders/FullScreenLoader";
import { IUserData } from "types/user";
import storage from "utils/storage";

interface AuthProviderTypes {
  children: ReactElement;
}

interface AuthContextType {
  user: IUserData | null;
  isLoading: boolean;
  handleSignIn: (user: IUserData) => void;
  handleSignOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleSignIn: (_userData: IUserData) => null,
  handleSignOut: () => undefined,
});

const AuthProvider = ({ children }: AuthProviderTypes) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: Add axios interceptor for 403

  useEffect(() => {
    const token = storage.getToken();
    let interceptor: any;

    // Check if token is in localstorage
    if (token) {
      // If so, add it to axios header, and fetch user details
      interceptor = axios.interceptors.request.use((config) => {
        config.headers.Authorization = token;

        return config;
      });

      handleFetchUser();
    } else {
      // If no token, set the loading to false to render auth routes
      setIsLoading(false);
    }

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, []);

  const handleFetchUser = async () => {
    setIsLoading(true);
    const { data } = await axios.get("/users/me");

    setUser(data.user);
    setIsLoading(false);
  };

  const handleSignIn = (userData: IUserData) => {
    storage.setToken(userData.token);

    setUser(userData);
  };

  const handleSignOut = () => {
    storage.clearToken();

    setUser(null);
  };

  const contextValue = {
    user,
    handleSignIn,
    handleSignOut,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <FullScreenLoader /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
