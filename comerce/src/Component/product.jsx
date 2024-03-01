import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const product = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ourpr">
        <div className="pro-he">
          <h2 className="pro-tex">Our Product</h2>
        </div>
        <div className="ourppp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Repudiandae obcaecati blanditiis quas, .
          </p>
          <NavLink to="shop">
            <button className="pro-btn">Button</button>
          </NavLink>
        </div>
        <div className="frame-21">
          <div className="rect121">
            <img className="shon" src="shifffon.jpg" alt="" />
          </div>
          <div className="rect122">
            <img className="shin" src="shif.jpg" alt="" />
          </div>
          <div className="rect123">
            <img className="shino" src="shib.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default product;
