import { Heading, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Box textAlign="center" marginTop={"10rem"}>
        <Heading marginBottom="3rem">PhotoHub</Heading>

        <Box width="80%" margin="auto">
          <Outlet />
        </Box>

        {location.pathname === "/auth/signin" ? (
          <ChakraLink
            as={Link}
            to="/auth/signup"
            marginTop="1rem"
            display="block"
          >
            Create a new account
          </ChakraLink>
        ) : (
          <ChakraLink
            as={Link}
            to="/auth/signin"
            marginTop="1rem"
            display="block"
          >
            Login to your account
          </ChakraLink>
        )}
      </Box>
    </>
  );
};

export default AuthLayout;
