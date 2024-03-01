import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const shopecatagorie = () => {
  return (
    <div>
      <div className="cata">
        <h2 className="text-cata">Catagories</h2>
        <p className="para-cata">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Numquam esse possimus optio quidem obcaecati vitae impedit placeat
          veniam <br />
          laboriosam quisquam praesentium quasi deleniti, illum excepturi id,
          magni commodi atque. Ipsa.
        </p>
        <NavLink to="shop">
          <button className="rectangle-69">Button</button>
        </NavLink>
      </div>
      <br />

      <div className="grid13">
        <div className="grid131">
          <img className="divq" src="divq.jpg" alt="" />
        </div>
        <div className="grid132">
          <img className="dive" src="emty1.jpg" alt="" />
        </div>
        <div className="grid133">
          <img className="divr" src="divr.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default shopecatagorie;
