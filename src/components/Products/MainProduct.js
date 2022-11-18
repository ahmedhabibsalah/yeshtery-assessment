import React, { useContext, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { coloredProducts, mainProduct } from "../../services/productsData";
import ReactStars from "react-rating-stars-component";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CartContext } from "../../context/cartContext";

const sizeData = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

function MainProduct(props) {
  const [isActive, setIsActive] = useState(2);
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <>
      <section className="main__product">
        <div className="image__grid__container">
          <div className="main__image">
            <img src={product.src} alt="main product" className="big__image" />
            <span className="rotate__icon">
              <img src="/360.png" alt="rotate" className="icon" />
            </span>
          </div>
          <div className="featured__images">
            <button className="product__swiper">
              <IoIosArrowBack />
            </button>
            {mainProduct.map((img) => (
              <img
                key={img.id}
                src={img.img}
                alt="featured"
                className="small__image"
              />
            ))}

            <button className="product__swiper">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="product__info">
          <div className="basic__info">
            <img src="/adidas.png" alt="adidas" className="info__logo" />
            <h3 className="info__title">{product.title}</h3>
            <p className="info__gender">Men</p>
            <span className="info__rating">
              <ReactStars
                count={5}
                value={4.9}
                size={24}
                activeColor="#ffd700"
                edit={false}
                a11y={false}
                emptyIcon={<AiOutlineStar />}
                filledIcon={<AiFillStar />}
              />
              <p className="numerical__rating">4.9 of 5</p>
              <p className="numbers__rating">22 Rates</p>
            </span>
            <span className="info__price">
              <h3 className="final__price">
                {product.price}
                <span style={{ fontWeight: "500", fontSize: "1.25rem" }}>
                  {" "}
                  LE
                </span>{" "}
              </h3>
              <p className="start__price">9.999 LE</p>
              <p className="discount">30% Off</p>
            </span>
          </div>
          <div className="size__info">
            <h4 className="size__title">Size</h4>
            <div className="sizes__wrapper">
              {sizeData.map((size, index) => (
                <div
                  key={index}
                  className="size__layout"
                  style={{
                    background:
                      isActive === index ? "rgb(190, 190, 190)" : "transparent",
                  }}
                  onClick={() => setIsActive(index)}
                >
                  <h4
                    className="sizes"
                    style={{
                      color: isActive === index ? "#000" : "#542e90",
                    }}
                    onClick={() => setIsActive(index)}
                  >
                    {size}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="colors__info">
            <h4 className="colors__title">Color</h4>
            <div className="color__wrapper">
              {coloredProducts.map((product, index) => (
                <div key={product.id} className="color__container">
                  <img
                    src={product.img}
                    alt={product.img}
                    className="color__image"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="quantity__info">
            <h4 className="quantity__title">Quantity</h4>
            <div className="quantity__adjust">
              <div
                className="adjust"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                <p className="symbol">-</p>
              </div>
              <p className="quantity__number">{productQuantity}</p>
              <div
                className="adjust"
                onClick={() => cart.addOneToCart(product.id)}
              >
                <p className="symbol">+</p>
              </div>
            </div>
            <div className="button__container">
              <button
                className="button__add"
                onClick={() => cart.addOneToCart(product.id)}
              >
                Add To Cart
              </button>
              <button className="button__pickup">Pickup From Store</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainProduct;
