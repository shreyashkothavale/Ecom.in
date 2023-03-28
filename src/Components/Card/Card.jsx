import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./card.css";
function Card({ name, imgData, isNew, price, category, id, url }) {
  const cardRef = useRef(null);
  const handleMouseEnter = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card !== cardRef.current) {
        card.classList.add("blur");
      }
    });
  };

  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card !== cardRef.current) {
        card.classList.remove("blur");
      }
    });
  };
  useEffect(() => {
    // console.log(url);
  }, []);
  return (
    <Link className="link" to={url}>
      <div
        className="card"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-container">
          {isNew === 1 && <span>New Season</span>}
          <img src={imgData?.img[0]} alt="" />
        </div>
        <p style={{ fontSize: "13px" }}>{name}</p>
        <p style={{ fontSize: "13px" }}>
          Rs.{Number(price).toLocaleString() + ".00"}
        </p>
      </div>
    </Link>
  );
}

export default Card;
