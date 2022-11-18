import React from "react";
import FeaturedProductCard from "../General/FeaturedProductCard";
import { featuredData } from "../../services/productsData";

function FeaturedProducts() {
  return (
    <div className="featured__container">
      <div className="stack__info">
        <h3 className="featured__title">Similar Products</h3>
        <p className="featured__desc">You may like these products also</p>
      </div>
      <div className="cards_container">
        {featuredData.map((item) => (
          <FeaturedProductCard
            key={item.id}
            main={item.main}
            title={item.title}
            mainPrice={item.mainPrice}
            startPrice={item.startPrice}
            logo={item.logo}
            discount={item.discount}
            price={item.price}
            rate={item.rate}
            rateNum={item.rateNum}
            pickup={item.pickup}
            from={item.from}
            to={item.to}
            days={item.days}
            store={item.store}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
