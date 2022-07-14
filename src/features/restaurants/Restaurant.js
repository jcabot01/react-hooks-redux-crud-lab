import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved, restaurantUpdated } from "./restaurantsSlice"

function Restaurant({ restaurant }) {
  const [editFormData, setEditFormData] = useState("");
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(restaurantRemoved(restaurant));
  }

  function handleEdit(e) {
    e.preventDefault()
    dispatch(restaurantUpdated({id: restaurant.id, name: editFormData}))
    setEditFormData("")
  }

  function handleChange(e) {
    setEditFormData(e.target.value)
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <form onSubmit={handleEdit}>
          <input type="text" onChange={handleChange} value={editFormData} placeholder="edit restaurant name"/>
          <button> ✔️ </button>
        </form>
        <ReviewsContainer restaurantId={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;
