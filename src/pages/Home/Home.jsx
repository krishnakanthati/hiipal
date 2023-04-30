import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hii Pal!</h1>
      <Link to="/features">
        <button>Features</button>
      </Link>
    </div>
  );
}

export default Home;
