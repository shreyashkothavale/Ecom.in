import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./cart.css";

import { useSelector, useDispatch } from "react-redux";
import {
  FavoriteBorder,
  DeleteOutline,
  AddOutlined,
  RemoveOutlined,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import state, {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../state";
import { Navigate, useNavigate } from "react-router-dom";
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("userId"));

  const cart = useSelector((state) => state.cart.cart);
  const cartData = cart.filter((obj) => obj.item.userId === userId);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(cartData);
  }, [cart]);

  const Total = cartData.reduce((total, item) => {
    return total + item.item.count * Number(item.item.price);
  }, 0);

  const EachTotal = (count, price) => {
    return Number(Number(count) * Number(price)).toLocaleString() + ".00";
  };

  return (
    <div className="main_container">
      <div className="breadcrumb">
        <BreadCrumb />
      </div>
      <div className="cart_container">
        <div className="cart">
          <div className="heading">
            <h1>Shopping Cart</h1>
          </div>
          <div className="content-container">
            <div className="cart_content">
              <div className="cart_products">
                <div className="cart_card">
                  {cartData.length !== 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                      }}
                    >
                      {cartData.map((item, index) => {
                        return (
                          <div
                            className="cart_card_products"
                            key={item.item.cartId}
                          >
                            <div className="prod_image">
                              <img src={item.item.imgData.img[0]} alt="" />
                            </div>
                            <div className="prod_details">
                              <div className="prod_name">
                                <div className="product_details">
                                  <div className="name">
                                    <h4>{item.item.name} </h4>
                                    <IconButton
                                      size="small"
                                      sx={{ color: "black" }}
                                      onClick={() =>
                                        dispatch(
                                          removeFromCart({
                                            cartId: item.item.cartId,
                                          })
                                        )
                                      }
                                    >
                                      <DeleteOutline sx={{ fontSize: 24 }} />
                                    </IconButton>
                                  </div>
                                  <div className="center_content">
                                    <p className="details">
                                      Size:
                                      <span
                                        style={{
                                          textAlign: "left",
                                          width: "70px",
                                        }}
                                      >
                                        {item.item.size}
                                      </span>
                                    </p>
                                    <p className="details">
                                      Total:
                                      <span
                                        style={{
                                          textAlign: "left",
                                          width: "70px",
                                        }}
                                      >
                                        {/* Rs.{Total[0]} */}
                                        Rs.
                                        {EachTotal(
                                          item.item.count,
                                          item.item.price
                                        )}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="prod_price">
                                    <p>
                                      Rs.
                                      {Number(
                                        item.item.price
                                      ).toLocaleString() + ".00"}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="card_bottom">
                                <div className="fav">
                                  <IconButton sx={{ color: "black" }}>
                                    <FavoriteBorder />
                                  </IconButton>
                                </div>
                                <div
                                  className="qnty"
                                  style={{ border: "1.5px solid gray" }}
                                >
                                  <IconButton
                                    sx={{ color: "black" }}
                                    onClick={() =>
                                      dispatch(
                                        decreaseCount({
                                          cartId: item.item.cartId,
                                        })
                                      )
                                    }
                                  >
                                    <RemoveOutlined />
                                  </IconButton>
                                  <div
                                    className="count"
                                    style={{
                                      width: "25px",
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {item.item.count}
                                  </div>
                                  <IconButton
                                    sx={{ color: "black" }}
                                    onClick={() =>
                                      dispatch(
                                        increaseCount({
                                          cartId: item.item.cartId,
                                        })
                                      )
                                    }
                                  >
                                    <AddOutlined />
                                  </IconButton>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="prod_details">
                      <h2>Your Shopping Cart Is Empty !</h2>
                      {userId !== null ? (
                        ""
                      ) : (
                        <p>
                          <span onClick={() => navigate("/login")}>
                            Log in{" "}
                          </span>{" "}
                          to add products to the cart
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="details">
                <div className="checkout_details">
                  <div
                    className="checkout_amounts"
                    style={{ marginBottom: "10px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#3b3b3b", fontSize: "13px" }}>
                        Order Value
                      </p>
                      <p style={{ fontSize: "13px" }}>
                        Rs.{Number(Total).toLocaleString() + ".00"}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#3b3b3b", fontSize: "13px" }}>
                        Delivery
                      </p>
                      <p style={{ fontSize: "13px" }}>FREE</p>
                    </div>
                  </div>

                  <Divider />
                  <div
                    className="checkout_amounts"
                    style={{ marginTop: "10px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>Total</p>
                      <p style={{ fontWeight: "bold" }}>
                        Rs.{Number(Total).toLocaleString() + ".00"}
                      </p>
                    </div>
                  </div>
                  <div className="checkout">
                    <button className="checkoutbtn">
                      Continue to Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
