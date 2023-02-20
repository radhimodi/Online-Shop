import { emailPattern, passwordPattern } from "../../constant/app.constant";
export const handleValidationForSignUp = (state) => {
  let errors = {};
  let formIsValid = true;
  if (!state.first_name || !state.last_name) {
    formIsValid = false;
    errors.full_name = "Full Name required";
  }
  if (!state.email) {
    formIsValid = false;
    errors.email = "Email required";
  } else if (!emailPattern.test(state.email)) {
    formIsValid = false;
    errors.email = "Please enter valid email address.";
  }
  if (!state.password) {
    formIsValid = false;
    errors.password = "Password required";
  } else if (!passwordPattern.test(state.password)) {
    formIsValid = false;
    errors.password =
      "Password should be (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars without spaces)";
  }
  return { errors, formIsValid };
};

export const handleValidationForSignIn = (state) => {
  let errors = {};
  let formIsValid = true;
  if (!state.email) {
    formIsValid = false;
    errors.email = "Email required";
  } else if (!emailPattern.test(state.email)) {
    formIsValid = false;
    errors.email = "Please enter valid email address.";
  }
  if (!state.password) {
    formIsValid = false;
    errors.password = "Password required";
  }
  return { errors, formIsValid };
};
