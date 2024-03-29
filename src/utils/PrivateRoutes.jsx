import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";

const PrivateRoutes = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Check with the server to determine if the user is authenticated
    const checkAuthentication = async () => {
      try {
        const response = await fetch(
          "https://hiipal.netlify.app/api/check-auth",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        if (response.status === 401) {
          console.log("Unathorized Access.");
        }

        if (data.isAuthenticated) {
          // Update the isAuthenticated state
          // You need to define setIsAuthenticated in your AuthContext
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    checkAuthentication();
  }, []);

  // Render a loading indicator while checking authentication
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="main-container">
          <div className="loading">🪸 waymint..</div>
        </div>
      </>
    );
  }
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
