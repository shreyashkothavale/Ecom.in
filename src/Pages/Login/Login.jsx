import React, { useState } from "react";
import "./login.css";
import Illustation from "../../assets/illustration.jpg";
import { PersonOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import SignUp from "../Signup/SignUp";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
function Login() {
  const { state } = useLocation();
  console.log(state);
  const loginDetails = state == undefined ? true : state.isLogin;
  const [isLogin, setIsLogin] = useState(loginDetails);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [err, seterr] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const users = JSON.parse(localStorage.getItem("users"));
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const Authenticate = (e) => {
    e.preventDefault();
    setValidEmail(false);
    seterr(false);
    setPassLength(false);
    if (loginInfo.email.trim() === " " && loginInfo.password.trim() === " ") {
      seterr(true);
    } else if (loginInfo.email.trim() == " ") {
      seterr(true);
    } else if (!/\S+@\S+\.\S+/.test(loginInfo.email)) {
      setValidEmail(true);
    } else if (loginInfo.password === "") {
      seterr(true);
    } else if (loginInfo.password.length < 8) {
      console.log(loginInfo);
      setPassLength(true);
    } else {
      setValidEmail(false);
      seterr(false);
      setPassLength(false);
      if (users !== null) {
        users.filter((item) => {
          if (
            item.email === loginInfo.email &&
            item.password === loginInfo.password
          ) {
            localStorage.setItem("userId", item.userId);
            navigate("/");
          } else {
            seterr(true);
          }
        });
      } else {
        seterr(true);
      }
    }
  };
  return (
    <div className="login_container">
      <div className="login">
        <div className="navbar-login">
          <div className="logo">
            <h2>Ecom.in</h2>
          </div>
          <div className="Home">
            <IconButton sx={{ color: "#222" }} onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
          </div>
        </div>
        <div className="login_signup">
          <div className="container">
            <div className="left">
              <div className="image-container">
                <img src={Illustation} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="form">
                <h2>Welcome To Ecom.in</h2>
                {isLogin ? (
                  <form>
                    <div className="user_name">
                      <label>Email</label>
                      <div
                        className="email inputcont"
                        style={{
                          border:
                            err || validEmail
                              ? "1px solid red"
                              : "1px solid #222",
                        }}
                      >
                        <input
                          value={loginInfo.email}
                          type="text"
                          onChange={(e) => {
                            setLoginInfo((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }));
                          }}
                        />
                        <div className="icon">
                          <PersonOutline
                            sx={{ color: err || validEmail ? "red" : "#222" }}
                          />
                        </div>
                      </div>
                      {err || validEmail ? (
                        <p
                          style={{
                            color: err || validEmail ? "red" : "#222",
                            fontSize: "13px",
                          }}
                        >
                          Please Enter Valid Email
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="password">
                      <label>Password</label>
                      <div
                        className="inputcont"
                        style={{
                          border:
                            err || passLength
                              ? "1px solid red"
                              : "1px solid #222",
                        }}
                      >
                        <input
                          value={loginInfo.password}
                          type={show ? "text" : "password"}
                          onChange={(e) => {
                            setLoginInfo((prev) => ({
                              ...prev,
                              password: e.target.value.trim(" "),
                            }));
                          }}
                        />
                        <div className="icon" onClick={() => setShow(!show)}>
                          {show ? (
                            <VisibilityOff
                              sx={{ color: err || passLength ? "red" : "#222" }}
                            />
                          ) : (
                            <Visibility
                              sx={{ color: err || passLength ? "red" : "#222" }}
                            />
                          )}
                        </div>
                      </div>
                      {err ? (
                        <p
                          style={{
                            color: err ? "red" : "#222",
                            fontSize: "13px",
                          }}
                        >
                          Please Enter Valid Password
                        </p>
                      ) : (
                        <></>
                      )}
                      {passLength ? (
                        <p
                          style={{
                            color: passLength ? "red" : "#222",
                            fontSize: "13px",
                          }}
                        >
                          Password length should be 8 characters
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <button className="loginBtn" onClick={Authenticate}>
                      Log In
                    </button>
                    <p>
                      Don't Have an account ?{" "}
                      <span onClick={() => setIsLogin(false)}>Sign Up</span>
                    </p>
                  </form>
                ) : (
                  <SignUp setIsLogin={setIsLogin} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
