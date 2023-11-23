import { Heading, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();

  return (
    <>
      <Box textAlign="center" marginTop={"10rem"}>
        <Heading marginBottom="3rem">PhotoHub</Heading>

        <Box width="80%" margin="auto">
          <Outlet />
        </Box>

        {location.pathname === "/account" ? (
          <ChakraLink as={Link} to="/account/new" marginTop="1rem" display="block">
            Create a new account
          </ChakraLink>
        ) : (
          <ChakraLink as={Link} to="/account" marginTop="1rem" display="block">
            Login to your account
          </ChakraLink>
        )}
      </Box>
    </>
  );
};

export default AuthLayout;
