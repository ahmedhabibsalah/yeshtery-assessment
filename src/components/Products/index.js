import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import MainProduct from "./MainProduct";
import "./Product.scss";
import { productsArray } from "../../services/productsData";

function Products() {
  return (
    <>
      {productsArray.map((product, idx) => (
        <span key={idx}>
          <MainProduct product={product} />
        </span>
      ))}

      <FeaturedProducts />
    </>
  );
}

export default Products;
