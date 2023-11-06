import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getCategories } from "../api/api";

 const Categories = () => {
  const [activeButton, setActiveButton] = useState(null);
  const data = getCategories();

  const changer = (category) => {
    setActiveButton(category.id);
  };

  return (
    <div>
      <div>
        <h1>Session Categories</h1>
        <section className="FlexContainer">
          {data ? (
            data.map((category) => (
              <Link
                key={category.id}
                className={category.id === activeButton ? "link active-button" : "link"}
                onClick={() => changer(category)}
                to={{ pathname: `/categories/${category.id}` }}
              >
                {category.name}
              </Link>
            ))
          ) : (
            <p>Loading or no data available...</p>
          )}
        </section>
        <Outlet />
      </div>
    </div>
  );
};
export default Categories;