import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  console.log(authenticated);
  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
