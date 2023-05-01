import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hii Pal!</h1>
      <Link to="/page">
        <button>page</button>
      </Link>
      <Link to={"/page/1"}>
        <button>page 1</button>
      </Link>
      <Link to={"/page/2"}>
        <button>page 2</button>
      </Link>
    </div>
  );
}

export default Home;
