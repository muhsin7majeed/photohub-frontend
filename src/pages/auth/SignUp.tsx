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
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Heading as="h2" size="sx" marginBottom="1rem">
        Create a new account
      </Heading>

      <FormControl>
        <FormLabel>Username</FormLabel>

        <Input type="text" placeholder="Enter username" colorScheme="teal" />
      </FormControl>

      <FormControl marginTop="1rem">
        <FormLabel>Password</FormLabel>

        <InputGroup size="md">
          <Input type={showPassword ? "text" : "password"} placeholder="password" colorScheme="teal" />

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

      <FormControl marginTop="1rem">
        <FormLabel>Confirm Password</FormLabel>

        <InputGroup size="md">
          <Input type={showPassword ? "text" : "password"} placeholder="Confirm password" colorScheme="teal" />

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

      <Button marginTop="1rem" colorScheme="teal" width="100%">
        SignUp
      </Button>
    </>
  );
};

export default SignUp;
