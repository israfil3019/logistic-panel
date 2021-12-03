import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import logo from "../assets/poshta_logo.png";
import { useAuth } from "../context/AuthContext";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [passwordShown, setPasswordShown] = useState(false);
  const { LoginUser } = useAuth();
  let history = useHistory();

  const handleShow = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (email, password) => {
    LoginUser({ email, password })
      .then((resp) => {
        if (!!resp.data.token) {
          setToken("mytoken", resp.data.token);
          window.localStorage.setItem(
            "newUser",
            JSON.stringify(resp.data.user)
          );
        } else {
          alert(resp.data.errors[0]);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (token["mytoken"] !== "undefined") {
      history.push("/operasyon");
    }
  }, [history, token]);

  return (
    <div id="login-container" className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="login-card">
            <div>
              <div className="img-cotainer">
                <a className="login_logo" href="/">
                  <img
                    className="img-fluid for-light"
                    src={logo}
                    alt="loginpage"
                  />
                </a>
              </div>
              <div className="login-main mx-auto">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Email is invalid")
                      .required("Email is required"),
                    password: Yup.string()
                      .min(8, "Password must be at least 8 characters")
                      // .matches(/\d+/, "Password must have a number")
                      // .matches(/[a-z]+/, "Password must have a lowercase")
                      // .matches(/[A-Z]+/, "Password must have a uppercase")
                      // .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char")
                      // .test("password", "Password is an invalid", value => !/\s+/.test(value))
                      .required("Password is required"),
                  })}
                  onSubmit={(fields) => {
                    const email = fields.email;
                    const password = fields.password;
                    handleLogin(email, password);
                  }}
                >
                  {({ errors, touched }) => (
                    <FormikForm className="theme-form">
                      <h4>Login</h4>
                      <p>Enter your email & password to login</p>
                      <div className="form-group">
                        <label htmlFor="email" className="col-form-label">
                          Email
                        </label>
                        <Field
                          name="email"
                          type="text"
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          placeholder="****@****"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="col-form-label">
                          Password
                        </label>
                        <Field
                          name="password"
                          type={passwordShown ? "text" : "password"}
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="*********"
                        />
                        <div className="show-hide">
                          <span
                            className={passwordShown ? "hide" : "show"}
                            onClick={handleShow}
                          ></span>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <div className="checkbox_remember">
                          <Form.Check id="checkbox_rmb" type="checkbox" />
                          <label className="text-muted" htmlFor="checkbox_rmb">
                            Remember password
                          </label>
                        </div>

                        <button
                          className="btn btn-primary btn-block"
                          id="signin_btn"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
