import "./_categoriesBar.scss";
import React, { useState } from "react";

const CategoriesBar = () => {
  const keywords = [
    "All",
    "React js",
    "Angular js",
    "use of API",
    "Coding",
    "Compiter Science",
    "Cricket",
    "All",
    "React js",
    "Angular js",
    "use of API",
    "Coding",
    "Compiter Science",
  ];
  const [activeElement, setActiveElement] = useState("All");
  const handeClick = (value) => {
    setActiveElement(value);
  };
  return (
    <>
      <div className="categories-bar">
        {keywords.map((value, i) => {
          return (
            <span
              className={activeElement === value ? "active" : ""}
              onClick={() => handeClick(value)}
              key={i}
            >
              {value}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default CategoriesBar;
