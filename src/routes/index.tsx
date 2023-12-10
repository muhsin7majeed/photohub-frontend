import { useLocation, useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { getPublicRoutes } from "./public";

export const AppRoutes = () => {
  //   const auth = useAuth();
  const location = useLocation();
  const auth = {};

  const routes = auth.user ? protectedRoutes : getPublicRoutes(location);

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
