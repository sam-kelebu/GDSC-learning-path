import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const ourlatest = () => {
  const navigate = useNavigate;
  return (
    <div>
      <div className="lattest">
        <h2 className="lattesxt">Our lattest arrival</h2>
        <p className="our-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <NavLink to="shop">
          <button className="rectangle-70">Button</button>
        </NavLink>
      </div>
      <br />
      <br />
      <div className="separate">
        <div className="rectangle20">
          <img className="divw" src="divw.jpg" alt="" />
        </div>
        <div className="rectangle21">
          <img className="shi" src="shif.jpg" alt="" />
        </div>
        <div className="rectangle22">
          <img className="shifo" src="shifff.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ourlatest;
