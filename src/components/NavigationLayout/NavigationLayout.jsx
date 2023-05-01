import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavigationLayout() {
  return (
    <div>
      <Link to="/page">
        <button>page</button>
      </Link>
      <Link to={"/page/1"}>
        <button>page 1</button>
      </Link>
      <Link to={"/page/2"}>
        <button>page 2</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default NavigationLayout;
