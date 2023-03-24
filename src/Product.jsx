import React from "react";

export const Product = (props) => {
  const { title, image, firstPrice, secondPrice } = props;
  return (
    <section className="products">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>
        <span>{firstPrice}</span>
        <span>{secondPrice}</span>
      </div>
      <button>Buy Now</button>
    </section>
  );
};
