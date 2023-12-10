import { Button, Heading } from "@chakra-ui/react";
import useAuth from "hooks/useAuth";

const Home = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.handleSignOut();
  };

  return (
    <>
      <Heading>Home Page</Heading>

      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Home;
