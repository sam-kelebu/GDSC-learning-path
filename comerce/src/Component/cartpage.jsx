import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
function cartpage() {
  return (
    <div className="hp-cart">
      <div>
        <h1 className="h-cart">Your Cart</h1>
        <p className="p-cart">Now read to checkout ? Coninue Shopping</p>
      </div>

      <div className="bo-cart">
        <div className="yo-cart">
          <div className="items-center">
            <div className="buy-shif">
              <img src="shif.jpg" alt="" className="buy-sh" />
            </div>

            <div className="w-[80%]">
              <h1 className="font-bold text-xl">Natural Honey Bottle</h1>
              <div className="quw">
                <span> Size L</span>
                <span>Quantity 1</span>
                <h1 className="">$99</h1>
              </div>

              <div className="fill">
                <span>Vendor Name</span>
                <span> Remove</span>
              </div>

              <div className="flexer"></div>
            </div>
          </div>

          <hr />

         

          <div className="second-item">
            <div>
              <img src="divw.jpg" alt="" className="w-divw" />
            </div>

            <div className="w-jjk">
              <h1 className="jkl">Natural Honey Bottle</h1>
              <div className="wuq">
                <span> Size L</span>
                <span>Quantity 1</span>
                <h1>$99</h1>/
              </div>
              <div className="adk">
                <span>Vendor Name</span>
                <span> Remove</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cheackpou">
          <div className="flexu">
            <span>Subtotal</span>
            <span>$120</span>
          </div>
          <div className="fhi">
            <div className="vh">
              <span>Shipping</span>
              <span>Calculated at the next step</span>
            </div>
            <hr />
            <div className="flexo">
              <span>Total</span>
              <span>$120</span>
            </div>
          </div>
          <NavLink to="/items">
            <button className="ch-btn">Continue to checkout</button>
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default cartpage;
