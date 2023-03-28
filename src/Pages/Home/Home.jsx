import React from "react";
import FeaturedProduct from "../../Components/FeaturedProducts/FeaturedProduct";
import Slider from "../../Components/Slider/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProduct type="Featured" />
      <FeaturedProduct type="Trending" />
    </div>
  );
}

export default Home;
