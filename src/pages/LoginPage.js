import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import logo from "../assets/poshta_logo.png";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [passwordShown, setPasswordShown] = useState(false);
  const { LoginUser } = useAuth();
  let history = useHistory();

  const handleShow = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    LoginUser({ email, password })
      .then((resp) => {
        if (!!resp.data.token) {
          console.log(resp);
          setToken("mytoken", resp.data.token);
          window.localStorage.setItem("newUser", JSON.stringify(resp.data.user));
          console.log(resp.data.user);
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
    <div id="login-container" className="container-fluid p-0 mt-5">
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
                <form className="theme-form" onSubmit={handleLogin}>
                  <h4>Login</h4>
                  <p>Enter your email & password to login</p>
                  <div className="form-group">
                    <label className="col-form-label">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="****@gmail.com"
                      name="email"
                      autoComplete="username"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      id="password_login"
                      className="form-control"
                      type={passwordShown ? "text" : "password"}
                      name="login[password]"
                      required=""
                      placeholder="*********"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="show-hide">
                      <span
                        className={passwordShown ? "hide" : "show"}
                        onClick={handleShow}
                      ></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkbox_remember">
                      <Form.Check id="checkbox1" type="checkbox" />
                      <label className="text-muted" htmlFor="checkbox1">
                        Remember password
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      id="signin_btn"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
