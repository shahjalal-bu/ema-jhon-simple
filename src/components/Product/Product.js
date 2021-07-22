import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


const Product = props => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt='' />
      </div>
      <div className='product-name'>
        <h4>{name}</h4>
        <br />
        <p>
          <small>by : {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock- Order soon</small>
        </p>
        <button className='main-btn' onClick={()=> props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faCartArrowDown} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
