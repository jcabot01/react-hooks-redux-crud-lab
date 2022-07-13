import React from "react";
import { reviewRemoved } from "./reviewsSlice";
import { useDispatch } from "react-redux"

function Review({ review }) {
  const dispatch = useDispatch();

  function handleReviewDelete() {
    dispatch(reviewRemoved(review.id))
  }
  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleReviewDelete}> Delete Review </button>
    </div>
  );
}

export default Review;
