import React from "react";
import { FiSend } from "react-icons/fi";
import "./Footer.scss";
const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt pellentesque sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Donec non ex nisl. Nunc molestie tellus eu luctus efficitur. Morbi non eros in neque congue bibendum.",
  "Phasellus efficitur nisl sit amet malesuada ultrices. Curabitur aliquam varius arcu, posuere dictum dui porta sagittis. Fusce facilisis purus vitae leo commodo cursus.",
];
const pages = [
  "About Us",
  "Contact Us",
  "Track Order",
  "Terms & Conditions",
  "Privacy Policy",
  "Sell With Us",
  "Shipping And Returns",
];
const socials = [
  "./facebook.png",
  "./linkedin.png",
  "./instagram.png",
  "./twitter.png",
];
const paymentsMethods = ["cash.png", "visa.png", "matercard.png"];
function Footer() {
  return (
    <footer className="footer__container">
      <div className="top__footer">
        <div className="left">
          <img
            src="/brand-logo-yellow.svg"
            alt="logo"
            className="footer__logo"
          />
          {paragraphs.map((paragraph, index) => (
            <p className="p__footer" key={index}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="right">
          <form className="footer__form">
            <label className="footer__label">Subscribe to our newsletter</label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="footer__input"
            />
            <button className="footer__button">
              Subscribe
              <FiSend fontSize="1.25rem" />
            </button>
          </form>
          <div className="footer__links">
            <div className="footer__pages">
              {pages.map((page, index) => (
                <p className="footer__page" key={index}>
                  {page}
                </p>
              ))}
            </div>
            <div className="footer__socials">
              {socials.map((social, index) => (
                <span className="footer__social" key={index}>
                  <img
                    src={social}
                    alt="social"
                    className="footer__socialImg"
                  />
                  /YESHTERY
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="rights">
          {" "}
          &copy; {new Date().getFullYear()}, yeshtery, All Rights Reserved
        </p>
        <span className="payment__container">
          {paymentsMethods.map((payment, index) => (
            <img key={index} src={payment} alt="payment" className="payment" />
          ))}
        </span>
        <span className="powered">
          <p className="powered__info">Powered By</p>
          <img src="./nasnav.png" alt="nasnav" className="nasnav" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
