import React from "react";
import "./General.scss";
function FeaturedProductCard({
  main,
  title,
  mainPrice,
  startPrice,
  logo,
  discount,
  price,
  rate,
  rateNum,
  pickup,
  from,
  to,
  days,
  store,
}) {
  return (
    <div className="card__container">
      <div className="image__container">
        <img src={main} alt="main product" className="card__image" />
        <span className="card__icon">
          <img src="/360.png" alt="rotate" className="icon__c" />
        </span>
      </div>

      <div className="text__stack">
        <h5 className="card__title">{title}</h5>
        <div className="card__price">
          <div className="price">
            <h5 className="card__mainP">
              {mainPrice}
              <span style={{ fontWeight: "500", fontSize: "0.8rem" }}> LE</span>
            </h5>
            {price ? (
              <span className="card__discount">
                <p className="card__intiP">{startPrice}</p>
                <span className="discount__c">{discount}</span>
              </span>
            ) : null}
          </div>
          <img src={logo} alt="logo" className="logo__card" />
        </div>
        <div className="card__rate">
          {rate}
          <p className="card__nr">{rateNum}</p>
        </div>
        <div className="card__pickup">
          {pickup ? (
            <span className="pickup__info">
              <p className="pickup">
                From <b>{from}</b>{" "}
              </p>
              <p className="pickup">
                To <b>{to}</b>{" "}
              </p>
              <p className="pickup">
                In <b>{days}</b>{" "}
              </p>
            </span>
          ) : (
            <p className="pickup">
              Pickup From <b>{store}</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
