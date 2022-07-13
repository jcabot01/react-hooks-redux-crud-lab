import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { useSelector } from "react-redux";

function ReviewsContainer({ restaurantId }) {
  const reviews = useSelector((state) => 
  state.reviews.entities.filter((review) => review.restaurantId === restaurantId));
  
  return (
    <div>
      <ReviewInput restaurantId={restaurantId} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
