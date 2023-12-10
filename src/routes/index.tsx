import { useLocation, useRoutes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import useAuth from "hooks/useAuth";
import Navbar from "components/Navbar";
import { protectedRoutes } from "./protected";
import { getPublicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = useAuth();
  const location = useLocation();

  console.log({ auth });

  const routes = auth.user ? protectedRoutes : getPublicRoutes(location);

  const element = useRoutes([...routes]);

  return (
    <>
      <Box paddingBottom="50px">{element}</Box>

      {auth.user && (
        // TODO: Is this the best place?
        <Navbar />
      )}
    </>
  );
};
