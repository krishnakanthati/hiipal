import React, { useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // const logout = () => {
  //   setIsAuthenticated(false);
  // };

  const logout = async () => {
    try {
      const response = await fetch("https://hiipal.netlify.app/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.status === 200) {
        setIsAuthenticated(false);
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const login = async (palid, password) => {
    try {
      const response = await fetch("https://hiipal.netlify.app/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ palid, password }),
      });

      async function getDataWithToken(pal) {
        const response = await fetch(
          `https://hiipal.netlify.app/profile/${pal}`,
          {
            method: "GET",
            headers: {
              // Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        console.log("DATA FROM COOKIE TOKEN", data);
      }

      const data = await response.json();
      if (data.status === "green") {
        await getDataWithToken(data.pal);
        setIsAuthenticated(true);
        navigate("/search");
      } else {
        alert("Incorrect pal ID and password.");
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
