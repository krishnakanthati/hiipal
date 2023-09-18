import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
