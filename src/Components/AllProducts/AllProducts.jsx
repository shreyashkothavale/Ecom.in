import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./allproducts.css";

import ProductData from "../../Constants/Constants";
import { useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";
function AllProducts({ type }) {
  let location = useLocation();
  const { pathname } = location;
  let arrUrl = pathname.split("/").slice(1);
  const [prodData, setProdData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (arrUrl[1] !== undefined) {
      let filterData = ProductData.filter((item) => item.category == arrUrl[1]);
      // console.log(filterData);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setProdData(filterData);
      }, 1000);
      // console.log(arrUrl);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setProdData(ProductData);
      }, 1000);
    }
  }, [location]);

  const mappCount = Array.from({ length: 40 }, (_, index) => index);
  return (
    <div className="allProducts">
      <div className="top">
        <h2>{arrUrl[1] !== "view%20all" ? type : "View All"}</h2>
      </div>

      <div className="bottom">
        {isLoading
          ? mappCount.map((item, index) => {
              return (
                <div key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={screenWidth > 900 ? 200 : 150}
                    height={screenWidth > 900 ? 300 : 220}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={screenWidth > 900 ? 200 : 150}
                    height={20}
                    style={{ marginTop: "5px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={screenWidth > 900 ? 200 : 150}
                    height={20}
                    style={{ marginTop: "5px" }}
                  />
                </div>
              );
            })
          : prodData.length !== 0
          ? prodData.map((item) => {
              return (
                <Card
                  {...item}
                  key={item.id}
                  url={
                    arrUrl[1] !== undefined
                      ? `${item.id}`
                      : `${item.category}/${item.id}`
                  }
                />
              );
            })
          : "No data"}
      </div>
    </div>
  );
}

export default AllProducts;
