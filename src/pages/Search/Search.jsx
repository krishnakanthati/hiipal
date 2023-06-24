import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Search.css";

function Search() {
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollableDiv = document.getElementById("main-container");
    scrollableDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollableDiv = document.getElementById("main-container");
    setIsVisible(scrollableDiv.scrollTop > 20);
  };

  const scrollToTop = () => {
    const scrollableDiv = document.getElementById("main-container");
    scrollableDiv.scrollTop = 0;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
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
      <div className="main-container" id="main-container">
        <SearchBar className="searchbar" />
        <div className="scrolltotop">
          {isVisible && (
            <button className="myBtn" onClick={scrollToTop} title="Go to top">
              Top
            </button>
          )}
        </div>

        <div className="search-container">
          {users.map((user) => (
            <div key={user.id} className="card">
              {user.id}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
