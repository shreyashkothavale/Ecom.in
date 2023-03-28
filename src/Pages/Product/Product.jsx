import { Skeleton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ProductData from "../../Constants/Constants";
import { addToCart, cartSlice } from "../../state";

import "./product.css";

function Product() {
  let location = useLocation();
  const { pathname } = location;
  let url = pathname.split("/").filter((item) => item !== "");
  const [prodData, setProdData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("userId"));
  const cart = useSelector((state) => state.cart.cart);
  const [screenWidth, setScreenWidth] = useState(0);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const AddToCart = (newState) => () => {
    setState({ open: true, ...newState });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);
    console.log(prodData);

    dispatch(addToCart({ item: { ...prodData, count } }));
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    let filterdata = ProductData.filter((item) => item.id == url[2]);
    filterdata[0].size = "S";

    setIsLoading(true);
    setTimeout(() => {
      setProdData(...filterdata);
      if (prodData.legth !== 0) {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <div>
      <div className="breadcrumb">
        <BreadCrumb />
      </div>
      {isLoading ? (
        <div className="product-container">
          <div className="product_image_container">
            <div className="prod_img">
              <div className="select_image">
                <Skeleton
                  variant="rectangular"
                  width={screenWidth > 900 ? 120 : 80}
                  height={screenWidth > 900 ? 153 : 100}
                />
              </div>
              <div className="select_image">
                <Skeleton
                  variant="rectangular"
                  width={screenWidth > 900 ? 120 : 80}
                  height={screenWidth > 900 ? 153 : 100}
                />
              </div>
              <div className="select_image">
                <Skeleton
                  variant="rectangular"
                  width={screenWidth > 900 ? 120 : 80}
                  height={screenWidth > 900 ? 153 : 100}
                />
              </div>
            </div>
            <div className="product_image">
              <Skeleton
                variant="rectangular"
                width={screenWidth > 900 ? 600 : "100%"}
                height={screenWidth > 900 ? 764 : 413}
              />
            </div>
          </div>
          <div className="product-details">
            <Skeleton variant="rectangular" width={"100%"} height={25} />
            <Skeleton variant="rectangular" width={"100%"} height={35} />
            <Skeleton variant="rectangular" width={"100%"} height={60} />
            <Skeleton variant="rectangular" width={"100%"} height={50} />
          </div>
        </div>
      ) : (
        <div className="product-container">
          <div className="product_image_container">
            <div className="prod_img">
              {prodData?.imgData?.img.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setImageIndex(index);
                    }}
                    className="select_image"
                    key={index}
                  >
                    <img
                      src={item}
                      alt=""
                      style={{
                        border:
                          imageIndex == index
                            ? "1px solid rgba(34, 34, 34, 0.5)"
                            : "",
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="product_image">
              <img src={prodData?.imgData?.img[imageIndex]} alt="" srcset="" />
            </div>
          </div>
          <div className="product-details">
            <h1>{prodData?.name}</h1>
            <span> Rs.{Number(prodData.price).toLocaleString() + ".00"}</span>
            <div className="select_size">
              <h4>SELECT SIZE</h4>
              <select
                className="select"
                value={prodData.size}
                onChange={(e) => {
                  setProdData((prevState) => ({
                    ...prevState,
                    size: e.target.value,
                  }));
                }}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="btn">
              <button
                className="addtocart"
                onClick={AddToCart({
                  vertical: "top",
                  horizontal: "center",
                })}
                disabled={userId !== null ? false : true}
                style={{ cursor: userId !== null ? "pointer" : "not-allowed" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={`${prodData?.name} added in cart`}
        key={vertical + horizontal}
      />
    </div>
  );
}

export default Product;
