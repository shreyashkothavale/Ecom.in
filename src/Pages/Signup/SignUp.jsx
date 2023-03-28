import React, { useState } from "react";
import { PersonOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function SignUp({ setIsLogin }) {
  const [signUpInfo, setSignUpInfo] = useState({
    userId: Date.now() + Math.random() * 100,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  //   const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [err, seterr] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const users = JSON.parse(localStorage.getItem("users"));
  const Signup = (e) => {
    const newId = Date.now() + Math.random() * 100;
    setSignUpInfo((prev) => ({
      ...prev,
      userId: newId,
    }));
    e.preventDefault();
    setValidEmail(false);
    seterr(false);
    setPassLength(false);

    if (
      signUpInfo.firstname.trim() === "" ||
      signUpInfo.lastname.trim() === "" ||
      signUpInfo.email.trim() === "" ||
      signUpInfo.password === ""
    ) {
      seterr(true);
    } else if (!/\S+@\S+\.\S+/.test(signUpInfo.email)) {
      setValidEmail(true);
    } else if (signUpInfo.password.length < 8) {
      setPassLength(true);
    } else {
      setValidEmail(false);
      seterr(false);
      setPassLength(false);

      // console.log(signUpInfo);
      if (users !== null) {
        // console.log(users);
        let isExist = users.find((item) => item.email === signUpInfo.email);
        if (isExist) {
          // console.log("email already exist");
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        } else {
          users.push(signUpInfo);
          localStorage.setItem("users", JSON.stringify(users));
          setSuccess(true);
          window.location.reload();
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }
      } else {
        localStorage.setItem("users", JSON.stringify([signUpInfo]));
        setSuccess(true);
        window.location.reload();
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
    }
    //   setUsers((users) => [...users, signUpInfo]);
    // console.log(users);
  };

  return (
    <>
      <form>
        <div className="user_name">
          <label>First Name</label>
          <div
            className="inputcont"
            style={{
              border: err ? "1px solid red" : "1px solid #222",
            }}
          >
            <input
              value={signUpInfo.firstname}
              type="text"
              onChange={(e) => {
                setSignUpInfo((prev) => ({
                  ...prev,
                  firstname: e.target.value,
                }));
              }}
            />
          </div>
          {err ? (
            <p style={{ color: "red", fontSize: "13px" }}>
              Please enter a valid first name
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="user_name">
          <label>Last Name</label>
          <div
            className="inputcont"
            style={{
              border: err ? "1px solid red" : "1px solid #222",
            }}
          >
            <input
              value={signUpInfo.lastname}
              type="text"
              onChange={(e) => {
                setSignUpInfo((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }));
              }}
            />
          </div>
          {err ? (
            <p style={{ color: "red", fontSize: "13px" }}>
              Please enter a valid last name
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="user_name">
          <label>Email</label>
          <div
            className="email inputcont"
            style={{
              border: err || validEmail ? "1px solid red" : "1px solid #222",
            }}
          >
            <input
              value={signUpInfo.email}
              type="text"
              onChange={(e) => {
                setSignUpInfo((prev) => ({
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
            <p style={{ color: "red", fontSize: "13px" }}>
              Please enter a valid email
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
              border: err || passLength ? "1px solid red" : "1px solid #222",
            }}
          >
            <input
              value={signUpInfo.password}
              type={show ? "text" : "password"}
              onChange={(e) => {
                setSignUpInfo((prev) => ({
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
            <p style={{ color: "red", fontSize: "13px" }}>
              Please enter a valid password
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
        <button className="loginBtn" onClick={Signup}>
          Sign Up
        </button>
        <p>
          Already Have an account ?
          <span onClick={() => setIsLogin(true)}> Log In</span>
        </p>
      </form>
      {
        <Snackbar
          open={success}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Account Created Successfully
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={error}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            User Already Exist
          </Alert>
        </Snackbar>
      }
    </>
  );
}

export default SignUp;
