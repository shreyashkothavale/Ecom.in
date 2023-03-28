import React, { useEffect, useState } from "react";
import "./products.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import FeaturedProduct from "../../Components/FeaturedProducts/FeaturedProduct";
import { useLocation } from "react-router-dom";
import AllProducts from "../../Components/AllProducts/AllProducts";
import { ArrowForwardIos } from "@mui/icons-material";
function Products() {
  const location = useLocation();
  const { pathname } = location;
  let url = pathname.split("/").filter((item) => item !== "");
  const [isSortHover, setIsSortHover] = useState(false);

  return (
    <div className="products">
      <div className="breadcrumb">
        <BreadCrumb />
      </div>
      <div className="content">
        <div className="sidebar">
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="filters">
              <p className="link filter">Clothes</p>
            </div>
            <div className="filters">
              <p className="link filter">Shoes And Accessories</p>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filters</h2>
          </div>
        </div>
        <div className="right-content">
          <div className="grid-products">
            <AllProducts
              type={url[1] !== undefined ? url[1].toUpperCase() : "View All"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
