import React, { useState } from "react";
import { fakeData } from "../../fakeData/fakeData";
import "./Shop.css";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [courses, setCourses] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (product) => {
    console.log("product Added", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="course-container">
        <h3>{courses.length}</h3>

        {courses.map((crs) => (
          <Course handleAddCourse={handleAddCourse} course={crs}></Course>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
