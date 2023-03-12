import React from "react";
import ProductReviewsCard from "./ProductReviewCard.js";
import "../styles/ProductReviews.css";
const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewsCard
          name={item.name}
          price={item.price}
          image={item.image}
          review={item.review}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
