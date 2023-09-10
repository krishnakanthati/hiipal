import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = { token: false };
  return (
    <Route {...rest}>
      {!auth.token ? <Navigate to={"/login"} /> : children}
    </Route>
  );
};

export default PrivateRoute;
