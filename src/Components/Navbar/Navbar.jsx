import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  PersonOutline,
  FavoriteBorder,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId"))
  );
  const cartData = cart.filter((obj) => obj.item.userId === userId);
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users"));
  const [user, setUser] = useState({});
  const LogOut = () => {
    localStorage.removeItem("userId");
    setUserId(JSON.parse(localStorage.getItem("userId")));
    window.location.reload();
  };
  useEffect(() => {
    // console.log(userId);
    if (userId !== null) {
      let loggedUser = users.filter((item) => {
        return item.userId === userId;
      });
      setUser(loggedUser[0]);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link className="link" to="/">
              Ecom.in
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <Search />
            <div className="person">
              <PersonOutline />

              <div className="Box">
                {userId !== null ? (
                  <>
                    <div className="username">
                      {user.firstname + " " + user.lastname}
                    </div>
                    <button className="logoutbtn" onClick={LogOut}>
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="loginBtn"
                      onClick={() => navigate("/login")}
                    >
                      Log In
                    </button>
                    <p>
                      Dont have an account ?{" "}
                      <span
                        onClick={() =>
                          navigate("/login", { state: { isLogin: false } })
                        }
                      >
                        Sign Up
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>

            <Link className="cartIcon link" to="/cart">
              <ShoppingBagOutlined />
              <span>{cartData.length}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="item">
          <Link className="link" to="/products">
            View All
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/women">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/men">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/children">
            Children
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/kids">
            Kids
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/sports">
            Sports
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
