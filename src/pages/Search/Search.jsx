import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import * as MdIcons from "react-icons/md";
import "./Search.css";

function Search() {
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setLoading] = useState(true);

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
    scrollableDiv.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar isLoading={isLoading} />
      <div className="main-container" id="main-container">
        <SearchBar className="searchbar" />
        <div className="scrolltotop-div">
          {isVisible && (
            <MdIcons.MdOutlineKeyboardDoubleArrowUp
              id="scrolltotop"
              onClick={scrollToTop}
              title="Go to top"
            />
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
