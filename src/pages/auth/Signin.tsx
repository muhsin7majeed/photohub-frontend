import {
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
import { Field, Form, Formik } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

import FormikErrorMessage from "components/Elements/FormikErrorMessage";
import useAuthContext from "hooks/useAuthContext";
import { IUserLoginValues } from "types/user";
import useLoginMutation from "./apis/useLoginMutation";
import { loginYupSchema } from "./yup.schema";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();
  const loginMutation = useLoginMutation();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLoginSubmit = (values: IUserLoginValues) => {
    const payload: IUserLoginValues = values;

    loginMutation
      .mutateAsync(payload)
      .then(({ data }) => {
        auth.handleUserLogin(data);
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
        validationSchema={loginYupSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl isInvalid={Boolean(errors.username)}>
              <FormLabel>Username*</FormLabel>

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
              <FormLabel>Password*</FormLabel>

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
              isLoading={loginMutation.isPending}
            >
              SignIn
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
