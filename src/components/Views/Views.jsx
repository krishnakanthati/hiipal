import React, { useEffect, useState } from "react";

import "./Views.css";

function Views() {
  const [views, setViews] = useState(getViews());

  function getViews() {
    fetch("https://api.countapi.xyz/get/hiipal/views/")
      .then((response) => response.json())
      .then((json) => setViews(json.value));
  }

  useEffect(() => {
    fetch("https://api.countapi.xyz/update/hiipal/views/?amount=1")
      .then((response) => response.json())
      .then((json) => setViews(json.value));
  }, []);

  return <div className="views">{views ? views : "views"}</div>;
}

export default Views;
