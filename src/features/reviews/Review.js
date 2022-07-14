import React, { useState } from "react";
import { reviewRemoved, reviewUpdated } from "./reviewsSlice";
import { useDispatch } from "react-redux"

function Review({ review }) {
  const dispatch = useDispatch();
  const [updatedReview, setUpdatedReview] = useState("");

  function handleReviewDelete() {
    dispatch(reviewRemoved(review.id))
  }

  function handleUpdateSubmit(e) {
    e.preventDefault();
    dispatch(reviewUpdated({id: review.id, review: updatedReview}))
    setUpdatedReview("");
  }

  function handleUpdateChange(e) {
    setUpdatedReview(e.target.value)
  }

  return (
    <div>
      <li>{review.comment}</li>
      <button onClick={handleReviewDelete}> Delete Review </button>
      <form onSubmit={handleUpdateSubmit} >
        <input type="text" onChange={handleUpdateChange} value={updatedReview} placeholder="Update review" />
        <button> ✔️ </button>
      </form>

    </div>
  );
}

export default Review;
