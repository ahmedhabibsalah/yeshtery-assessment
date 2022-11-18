import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { getProductData } from "../../services/productsData";

function CartCard(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <div className="cart__card">
      <img className="cart__img" src={productData.src} alt="product" />
      <div className="cart__text">
        <p className="cart__titleC">{productData.title}</p>
        <div className="cart__info">
          <span className="info__text">
            <p className="cart__quantity">Quantity: {quantity}</p>
            <p className="cart__price">
              {(quantity * 9999).toFixed(2)}
              <span style={{ fontWeight: "500", fontSize: "0.8rem" }}> LE</span>
            </p>
          </span>
          <button className="remove" onClick={() => cart.deleteFromCart(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
