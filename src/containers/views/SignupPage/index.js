import React, { useState } from "react";
import { handleValidationForSignUp } from "../../../component/FormValidation";
import { useDispatch } from "react-redux";
import { register_data } from "../../redux/action";
import Toast from "../../../component/Toast";
import { ROUTE_SIGN_IN } from "../../routes/routes";
import { Link } from "react-router-dom";

const SignUpPage = (props) => {
  const InitialState = {};
  const [user, setUser] = useState(InitialState);
  const [errors, setErrors] = useState({});
  const [remeberCheck, setRememberCheck] = useState(false);
  const dispatch = useDispatch();

  const onHandleChange = ({ target }) => {
    const value = target && target.value;
    const name = target && target.name;
    setUser({ ...user, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const { full_name, email, password } = user;
    let parts = full_name && full_name.split(" ");
    const userDetail = {
      first_name: parts && parts.shift(),
      last_name: parts && parts.join(" "),
      email,
      password,
      status: remeberCheck ? "active" : "",
      role: "70c7846d-a112-4c7e-b8ad-03b97f334028",
    };
    const validatation = handleValidationForSignUp(userDetail);
    if (!validatation.formIsValid) {
      setErrors(validatation.errors);
    } else {
      setErrors({});
      try {
        dispatch(register_data(userDetail)).then((user_data) => {
          if (user_data) {
            setUser(InitialState);
            Toast({ message: "Register Successfully", type: "success" });
            props.history.push("/sign-in");
          }
        });
      } catch (error) {
        if (error) {
          console.log({ error });
        }
      }
    }
  };
  return (
    <div className="container main-form">
      <div className="col-md-12">
        <h1 className="main-content">Online Shop</h1>
        <h3 className="main-title">Register Your account</h3>
        <form onSubmit={(e) => onHandleSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              onChange={onHandleChange}
            />
            <div className="text-danger">{errors.full_name}</div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onHandleChange}
            />
            <div className="text-danger">{errors.email}</div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={onHandleChange}
            />
            <div className="text-danger">{errors.password}</div>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              name="rememmber_check"
              className="remember_check"
              onClick={() => setRememberCheck(!remeberCheck)}
            />
            I accept terms and condition
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="submit-button"
              name="submit"
              value="submit"
            />
          </div>
        </form>
        <p>Already have an account <Link to ={ROUTE_SIGN_IN} >Sign In </Link></p>
      </div>
    </div>
  );
};
export default SignUpPage;
