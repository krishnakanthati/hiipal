import React, { useState } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

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
        // Make the GET request to your backend with the token in the Authorization header
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
        setAuthenticated(true); // Set authenticated state after successful authentication
        navigate("/search");
      } else {
        alert("Incorrect pal ID and password.");
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
