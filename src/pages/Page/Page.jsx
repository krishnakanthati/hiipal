import React from "react";
import { useParams } from "react-router-dom";

function Page() {
  const { id } = useParams();
  return <div>Page {id}</div>;
}

export default Page;
