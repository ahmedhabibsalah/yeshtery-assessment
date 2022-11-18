import React from "react";

const dataInfo = [
  "Men",
  "Women",
  "Unisex",
  "Kids",
  "Best Seller",
  "New Arrivals",
  "Offers",
];
function CategoriesNav() {
  return (
    <nav className="category__nav">
      <div className="category__container">
        {dataInfo.map((info, index) => (
          <h5 key={index} className="category">
            {info}
          </h5>
        ))}
      </div>
    </nav>
  );
}

export default CategoriesNav;
