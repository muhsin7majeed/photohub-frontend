import * as yup from "yup";

export const signInYupSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

export const signUpYupSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Enter a valid email"),
  password: yup.string().required("Required").min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .when("password", (password, field) =>
      password
        ? field
            .required("Required")
            .oneOf([yup.ref("password")], "Password should match")
        : field
    ),
});
