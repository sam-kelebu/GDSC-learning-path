import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import Cartpage from './cartpage';

const Header = () => {
  const navigate =useNavigate();
  return (
    <div>
       <div id="navbar">
        <div className="heade">
          <h2 className="text-header">BOAZ Fashion</h2>
        </div>
        <div className="btoo">
          <NavLink to='cart'>
          <button  className="nav-btn">
            Cart
          </button>
          </NavLink>
          
        </div>
      </div>
    </div>
  )
}

export default Header
