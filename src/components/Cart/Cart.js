import React from "react";

const Cart = props => {
  const cart = props.cart;
  let totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  totalPrice = totalPrice.toFixed(2);

  let shipping = 0;
  if(totalPrice > 35){
      shipping = 0;
  }
  else if(totalPrice > 15){
      shipping = 4.99;
  }else if(totalPrice > 0){
      shipping = 12.99;
  }

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Shipping Cost: {shipping}</p>
      <p>Total Price: {+totalPrice + shipping}</p>
    </div>
  );
};

export default Cart;
