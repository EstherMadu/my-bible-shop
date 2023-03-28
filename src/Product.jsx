import React from "react";

export const Product = (props) => {
  const { title, image, firstPrice, secondPrice } = props;
  return (
    <section className="products">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <span className="first_price line-through ">{firstPrice}</span>
        <span className="second_price">
          <button className="price-btn">{secondPrice} </button>
        </span>
      </div>
      <button>Buy Now</button>
    </section>
  );
};
