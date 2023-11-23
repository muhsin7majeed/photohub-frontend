import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import useAuthContext from "hooks/useAuthContext";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = () => {
    const newUser = {
      name: "Babu",
    };

    auth.login(newUser, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Heading as="h2" size="sx" marginBottom="1rem">
        Login to your account
      </Heading>

      <FormControl>
        <FormLabel>Username</FormLabel>

        <Input type="text" placeholder="Enter username" colorScheme="teal" />
      </FormControl>

      <FormControl marginTop="1rem">
        <FormLabel>Password</FormLabel>

        <InputGroup size="md">
          <Input type={showPassword ? "text" : "password"} placeholder="Enter password" colorScheme="teal" />

          <InputRightElement>
            <IconButton
              colorScheme="teal"
              aria-label="show password"
              size="sm"
              variant="ghost"
              icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              onClick={handleShowPassword}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button marginTop="1rem" colorScheme="teal" width="100%" onClick={handleLoginSubmit}>
        Login
      </Button>
    </>
  );
};

export default Login;
