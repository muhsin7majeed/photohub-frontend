import * as yup from "yup";

export const loginYupSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});
