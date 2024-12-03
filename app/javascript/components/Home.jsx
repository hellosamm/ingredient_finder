import React from "react";
import { Link, Outlet } from "react-router-dom";

export default () => (
  <div>
    <Link to={"/"}>homepage</Link> <div></div>
    <Link to={`recipes`}>view all recipes</Link> <div></div>
    <Link to={`search`}>search</Link>
    <div>
      <Outlet />
    </div>
  </div>
);
