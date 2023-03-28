import React from "react";
import "./featuredproduct.css";
import Card from "../Card/Card";
import "../../index.css";
import ProductData from "../../Constants/Constants";
function FeaturedProduct({ type }) {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        {type == "Featured" ? (
          <p>
            Discover our curated selection of featured products, including new
            arrivals, best-sellers, and trending items, all designed to keep you
            looking stylish and on-trend. Shop now and elevate your wardrobe
            with our top picks.
          </p>
        ) : (
          <p>
            keep up with the latest fashion trends with our trending now
            section. Our team of fashion experts keeps a close eye on the latest
            styles and selects the hottest items for you to shop. From bold
            prints to vibrant colors, you're sure to find something that catches
            your eye.
          </p>
        )}
      </div>
      <div className="bottom">
        {type === "Featured"
          ? ProductData.slice(0, 4).map((item) => {
              return (
                <Card
                  {...item}
                  key={item.id}
                  url={`/products/${item.category}/${item.id}`}
                />
              );
            })
          : ProductData.slice(5, 9).map((item) => {
              return (
                <Card
                  {...item}
                  key={item.id}
                  url={`/products/${item.category}/${item.id}`}
                />
              );
            })}
      </div>
    </div>
  );
}

export default FeaturedProduct;
