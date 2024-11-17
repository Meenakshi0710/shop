import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
          <span>Shoes</span>
          <span>NewArrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>About</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            architecto porro expedita est animi eveniet, reiciendis illum
            corporis iure cupiditate cumque ullam accusamus accusantium dolor
            atque, cum eaque dicta dolore?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            architecto porro expedita est animi eveniet, reiciendis illum
            corporis iure cupiditate cumque ullam accusamus accusantium dolor
            atque, cum eaque dicta dolore?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MYSTORE</span>
          <span className="copyright">@ Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
