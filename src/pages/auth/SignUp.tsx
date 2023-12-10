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
import { Field, Formik } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import FormikErrorMessage from "components/Elements/FormikErrorMessage";
import useAuth from "hooks/useAuth";
import { IUserSignUpValues } from "types/user";
import useSignUpMutation from "./apis/useSignUpMutation";
import { signUpYupSchema } from "./yup.schema";

const SignUp = () => {
  const auth = useAuth();
  const signUpMutation = useSignUpMutation();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSignUpSubmit = (values: IUserSignUpValues) => {
    const payload: IUserSignUpValues = {
      ...values,
      email: values.email || undefined,
    };

    signUpMutation
      .mutateAsync(payload)
      .then(({ data }) => {
        auth.handleSignIn(data);
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
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Heading as="h2" size="sx" marginBottom="1rem">
        Create a new account
      </Heading>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpYupSchema}
        onSubmit={handleSignUpSubmit}
      >
        {({ errors, handleSubmit }) => (
          <Box as="form" textAlign="left" onSubmit={handleSubmit}>
            <FormControl
              isInvalid={Boolean(errors.username)}
              marginBottom="1rem"
            >
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

            <FormControl isInvalid={Boolean(errors.email)} marginBottom="1rem">
              <FormLabel fontSize="small">Email</FormLabel>

              <Field
                as={Input}
                type="email"
                name="email"
                placeholder="Enter email"
                colorScheme="teal"
              />

              <FormikErrorMessage name="email" />
            </FormControl>

            <FormControl
              isInvalid={Boolean(errors.password)}
              marginBottom="1rem"
            >
              <FormLabel fontSize="small">Password*</FormLabel>

              <InputGroup size="md">
                <Field
                  as={Input}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  colorScheme="teal"
                />

                <InputRightElement>
                  <IconButton
                    colorScheme="teal"
                    aria-label="show password"
                    size="sm"
                    variant="ghost"
                    type="button"
                    icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    onClick={handleShowPassword}
                  />
                </InputRightElement>
              </InputGroup>

              <FormikErrorMessage name="password" />
            </FormControl>

            <FormControl
              isInvalid={Boolean(errors.confirmPassword)}
              marginBottom="1rem"
            >
              <FormLabel fontSize="small">Confirm Password*</FormLabel>

              <InputGroup size="md">
                <Field
                  as={Input}
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter password again"
                  colorScheme="teal"
                />

                <InputRightElement>
                  <IconButton
                    colorScheme="teal"
                    aria-label="show password"
                    size="sm"
                    variant="ghost"
                    type="button"
                    icon={showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    onClick={handleShowPassword}
                  />
                </InputRightElement>
              </InputGroup>

              <FormikErrorMessage name="confirmPassword" />
            </FormControl>

            <Button
              marginTop="1rem"
              type="submit"
              colorScheme="teal"
              width="100%"
              isLoading={signUpMutation.isPending}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
