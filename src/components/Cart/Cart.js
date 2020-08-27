import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, crs) => total + crs.price, 0);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Total Courses Ordered: {cart.length}</p>
      <p>Total Price: {total} $</p>
    </div>
  );
};

export default Cart;
