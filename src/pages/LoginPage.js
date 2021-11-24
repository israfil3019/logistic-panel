import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router";
import logo from "../assets/poshta_logo.png";

// import LoginPageStyle from "./LoginPageStyle.module.css";

export default function LoginPage() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // // const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setIsLogin] = useState(true);
  let navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    navigate('/operasyon')
  }

  // const handleLogin = () => {
  //   Functions.LoginUser({ username, password })
  //     .then((resp) => setToken("mytoken", resp.token))
  //     .catch((err) => console.log(err));
  // };
  // const handleRegister = () => {
  //   Functions.RegisterUser({ username, password })
  //     .then((resp) => handleLogin())
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   if (token["mytoken"]) {
  //     history.push("/articles");
  //   }
  // }, [history, token]);

  return (
    <div id="login-container" className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 p-0">
          <div className="login-card">
            <div>
              <div>
                <a className="login_logo" href="/">
                  <img
                    className="img-fluid for-light"
                    src={logo}
                    alt="loginpage"
                  />
                </a>
              </div>
              <div className="login-main mx-auto">
                <form className="theme-form"
                 onSubmit={handleLogin}
                 >
                  <h4>Login</h4>
=======
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import Functions from "../Functions";
import logo from "../assets/poshta_logo.png";

// import LoginPageStyle from "./LoginPage.module.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [token, setToken] = useCookies(["mytoken"]);
  let history = useHistory();

  const handleLogin = () => {
    Functions.LoginUser({ username, password })
      .then((resp) => setToken("mytoken", resp.token))
      .catch((err) => console.log(err));
  };
  const handleRegister = () => {
    Functions.RegisterUser({ username, password })
      .then((resp) => handleLogin())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token["mytoken"]) {
      history.push("/articles");
    }
  }, [history, token]);

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-3 p-0 mx-auto">
          <div className="login-card">
            <div className="justify-content-center">
              <div>
                <a className="logo" href="/">
                  <img
                    className="img-fluid for-light"
                    src={logo}
                    alt="looginpage"
                  />
                </a>
              </div>
              <div className="login-main">
                <form className="theme-form">
                  <h4>Sign in to account</h4>
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
                  <p>Enter your email & password to login</p>
                  <div className="form-group">
                    <label className="col-form-label">Email Address</label>
                    <input
<<<<<<< HEAD
                      class="form-control"
                      type="email"
                      required=""
                      placeholder="****@gmail.com"
                      name="email"
                      value=""
=======
                      className="form-control"
                      type="email"
                      required=""
                      placeholder="Test@gmail.com"
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="login[password]"
                      required=""
                      placeholder="*********"
                    />
                    <div className="show-hide">
<<<<<<< HEAD
                      <span className="show"></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkbox_password">
=======
                      <span className="show"> </span>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="checkbox p-0">
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
                      <input id="checkbox1" type="checkbox" />
                      <label className="text-muted" for="checkbox1">
                        Remember password
                      </label>
                    </div>
<<<<<<< HEAD
                   
                    <button className="btn btn-primary btn-block" id='signin_btn' type="submit">
=======
                    <a className="link" href="{{ route('forget-password') }}">
                      Forgot password?
                    </a>
                    <button className="btn btn-primary btn-block" type="submit">
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
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

<<<<<<< HEAD

=======
{
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
  /* <div>
<div id="login">
  <h3 class="text-center text-white pt-5">Login form</h3>
  <div class="container">
    <div
      id="login-row"
      class="row justify-content-center align-items-center"
    >
      <form id="login-form" class="form" action="" method="post">
        <h3 class="text-center text-info">Login</h3>
        <div class="form-group">
          <label for="username" class="text-info">
            Username:
          </label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password" class="text-info">
            Password:
          </label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="remember-me" class="text-info">
            <span>Remember me</span> 
            <span>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
            </span>
          </label>
          <br />
          <input
            type="submit"
            name="submit"
            class="btn btn-info btn-md"
            value="submit"
          />
        </div>
        <div id="register-link" class="text-right">
          <a href="/" class="text-info">
            Register here
          </a>
        </div>
      </form>

      <div id="login-column" class="col-md-6">
        <div id="login-box" class="col-md-12"></div>
      </div>
    </div>
  </div>
</div>
</div> */
<<<<<<< HEAD

=======
}
>>>>>>> eb77c211543fe0ef41369e870946bc334be5f1e6
