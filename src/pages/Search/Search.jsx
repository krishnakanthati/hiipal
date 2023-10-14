import React, { useEffect, useState, useMemo, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import * as IoIcons from "react-icons/io";
import "./Search.css";
import QueryContext from "../../context/QueryContext";

function Search() {
  const { query } = useContext(QueryContext);
  const [users, setUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setLoading] = useState(true);

  const filteredItems = useMemo(() => {
    return users.filter((user) => {
      return user.id
        .toString()
        .toLowerCase()
        .includes(query.toString().toLowerCase());
    });
  }, [users, query]);

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
        <div className="scrolltotop-div">
          {isVisible && (
            <IoIcons.IoIosArrowUp
              id="scrolltotop"
              onClick={scrollToTop}
              title="Go to top"
            />
          )}
        </div>

        <div className="search-container">
          {filteredItems.map((user) => (
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
