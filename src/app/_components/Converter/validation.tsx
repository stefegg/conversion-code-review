import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  inputNum: Yup.number()
    .typeError("Please enter a number")
    .required("Required"),
  inputUnit: Yup.string().required("Required"),
  targetUnit: Yup.string().required("Required"),
  studentInput: Yup.number()
    .typeError("Please enter a number")
    .required("Required"),
});
