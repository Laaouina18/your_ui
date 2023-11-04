import React, { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";

// const CategoryContext = createContext();

const Categories = () => {
//   const [activeButton, setActiveButton] = useState(null);
//   const [data, setData] = useState({});

//   const handleButtonClick = (category) => {
//     setActiveButton(category.id);
//     setData(category);
//   };

  return (
    <div>
      <h1>Session Categories</h1>
      <section className="FlexContainer">
      
          <Link
    
            className="link active-button"
          >
            category.name
          </Link>
     
      </section>

   
    </div>
  );
};

export default Categories;
