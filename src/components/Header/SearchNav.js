import React, { useContext } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsHandbag, BsHeart, BsPerson } from "react-icons/bs";
import { CartContext } from "../../context/cartContext";
import CartCard from "../General/CartCard";

function SearchNav({ showSidebar, sidebar, props }) {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <nav className="search__nav">
        <form className="search__bar">
          <input
            type="text"
            placeholder="Search"
            className="search__input"
            defaultValue="Search"
          />
          <button className="search__icon">
            <AiOutlineSearch />
          </button>
        </form>
        <div className="search__logo__container">
          <img className="search__logo" src="/adidas.png" alt="adidas" />
        </div>
        <div className="search__nav__info">
          <div className="search__info__container" onClick={showSidebar}>
            <span className="search__info__icon">
              <BsHandbag />
            </span>
            <h5 className="search__info__title">Cart</h5>
            <span className="search__cart__number">{productsCount}</span>
          </div>
          <div className="search__info__container">
            <span className="search__info__icon">
              <BsHeart />
            </span>
            <h5 className="search__info__title">Wishlist</h5>
          </div>
          <div className="search__info__container">
            <span className="search__info__icon">
              <BsPerson />
            </span>
            <h5 className="search__info__title">Login</h5>
          </div>
        </div>
      </nav>
      <aside className={sidebar ? "sidebar active" : "sidebar"}>
        <ul onClick={showSidebar}>
          <li className="sidebar__toggle">
            <AiOutlineClose />
          </li>
        </ul>
        <h3 className="sidebar__title">My Cart</h3>
        <h5 className="sidebar__summary">Cart Summary</h5>

        {productsCount > 0 ? (
          <>
            {cart.items.map((currentProduct, idx) => (
              <CartCard
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              />
            ))}
            <h1 className="cart__titleA">Total: {productsCount * 9999} LE</h1>
            <div className="buttons__wrapper">
              <button className="review">Review Cart</button>
              <button className="complete">Complete Checkout</button>
            </div>
          </>
        ) : (
          <h1 className="cart__titleA">There are no items in your cart!</h1>
        )}
      </aside>
    </>
  );
}

export default SearchNav;
