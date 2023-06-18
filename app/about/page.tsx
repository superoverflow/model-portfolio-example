import React from "react";
import data from "./links.json";

const items = data.map((d) => <div key={d.link}>{d.link}</div>);

const page = () => {
  return <div>{items}</div>;
};

export default page;
