import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const infoData = [
  { value: "Contact Us", icon: <FiPhoneCall /> },
  { value: "Track Order", icon: <BsCart3 /> },
  { value: "Find A Store", icon: <SlLocationPin /> },
];

function MainNav() {
  return (
    <nav className="main__nav">
      <div className="main__logo__container">
        <button className="main__logo__menu">
          <HiMenuAlt1 />
        </button>
        <button className="main__logo">
          <img src="/brand-logo-yellow.svg" alt="logo" className="logo" />
        </button>
      </div>
      <div className="main__offer__container">
        <button className="main__offer__arrow">
          <IoIosArrowBack />
        </button>
        <h5 className="main__offer">
          Valentine's Day Offers! Buy Two Get One Free{" "}
          <a href="https://www.yeshtery.com/" className="main__offer__link">
            Shop Now
          </a>{" "}
        </h5>
        <button className="main__offer__arrow">
          <IoIosArrowForward />
        </button>
      </div>
      <div className="main__nav__info">
        {infoData.map((info, index) => (
          <div className="main__info__container" key={index}>
            <span className="main__info__icon">{info.icon}</span>
            <h5 className="main__info__title">{info.value}</h5>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default MainNav;
