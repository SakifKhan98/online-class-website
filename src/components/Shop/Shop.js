import React, { useState } from "react";
import { fakeData } from "../../fakeData/fakeData";
import "./Shop.css";
import Course from "../Course/Course";

const Shop = () => {
  const [courses, setCourses] = useState(fakeData);
  console.log(fakeData);

  return (
    <div className="shop-container">
      <div className="course-container">
        <h3>{courses.length}</h3>

        {courses.map((crs) => (
          <Course course={crs}></Course>
        ))}
      </div>
      <div className="cart-container">
        <h3>This is Cart</h3>
      </div>
    </div>
  );
};

export default Shop;
