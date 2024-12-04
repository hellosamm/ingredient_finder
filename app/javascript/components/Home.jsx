import React from "react";
import { Link, Outlet } from "react-router-dom";

export default () => (
  <div>
    <div className="navbar">
      {/* <a href="/">
        <span className="material-symbols-outlined">skillet</span>
      </a> */}
      <Link to={"/"}>home</Link>
      <Link to={`recipes`}>view all recipes</Link>
      <Link to={`search`}>search</Link>
    </div>

    <div>
      <Outlet />
    </div>
  </div>
);
