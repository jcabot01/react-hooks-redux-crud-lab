import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice"

function RestaurantInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input 
          type="text" 
          onChange={handleChange} 
          value={name}
          name="name"
        />
      </label>
      <button type="submit">Add Restaurant</button>
    </form>
  );
}

export default RestaurantInput;
