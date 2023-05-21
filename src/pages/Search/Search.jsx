import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Search.css";

function Search() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <SearchBar className="searchbar" />
        <div className="search-container">
          {users.map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
