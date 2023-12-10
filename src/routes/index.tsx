import { useLocation, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { getPublicRoutes } from "./public";
import useAuth from "hooks/useAuth";

export const AppRoutes = () => {
  const auth = useAuth();
  const location = useLocation();

  console.log({ auth });

  const routes = auth.user ? protectedRoutes : getPublicRoutes(location);

  const element = useRoutes([...routes]);

  return <>{auth.isLoading ? <>loading</> : element}</>;
};
