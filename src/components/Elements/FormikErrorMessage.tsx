import { FormErrorMessage } from "@chakra-ui/react";
import { ErrorMessage } from "formik";

interface PropTypes {
  name: string;
}

const FormikErrorMessage = ({ name }: PropTypes) => {
  return <ErrorMessage component={FormErrorMessage} name={name} />;
};
export default FormikErrorMessage;
