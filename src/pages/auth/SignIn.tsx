import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Field, Formik } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "hooks/useAuth";
import { IUserSignInValues } from "types/user";
import FormikErrorMessage from "components/Elements/FormikErrorMessage";
import useSignInMutation from "./apis/useSignInMutation";
import { signInYupSchema } from "./yup.schema";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const signInMutation = useSignInMutation();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  // TODO: Fix location from, for auth
  const from = location.state?.from?.pathname || "/";

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSignInSubmit = (values: IUserSignInValues) => {
    const payload: IUserSignInValues = values;

    signInMutation
      .mutateAsync(payload)
      .then(({ data }) => {
        auth.handleSignIn(data);
        navigate(from);
      })
      .catch(() => {
        toast({
          title: "Something went wrong!",
          status: "error",
        });
      });
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <Heading as="h2" size="sx" marginBottom="1rem">
        SignIn to your account
      </Heading>

      <Formik
        initialValues={initialValues}
        validationSchema={signInYupSchema}
        onSubmit={handleSignInSubmit}
      >
        {({ errors, handleSubmit }) => (
          <Box as="form" textAlign="left" onSubmit={handleSubmit}>
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel fontSize="small">Username*</FormLabel>

              <Field
                as={Input}
                type="text"
                name="username"
                placeholder="Enter username"
                colorScheme="teal"
              />

              <FormikErrorMessage name="username" />
            </FormControl>

            <FormControl marginTop="1rem" isInvalid={Boolean(errors.password)}>
              <FormLabel fontSize="small">Password*</FormLabel>

              <InputGroup size="md">
                <Field
                  as={Input}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  colorScheme="teal"
                />

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

              <FormikErrorMessage name="password" />
            </FormControl>

            <Button
              marginTop="1rem"
              colorScheme="teal"
              width="100%"
              type="submit"
              isLoading={signInMutation.isPending}
            >
              Sign In
            </Button>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
