import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: []
  },
  reducers: {
    restaurantAdded(state, action) {
      state.entities.push({
        id: uuid(),
        name: action.payload,
      });
    },
    restaurantRemoved(state, action) {
      // const index = state.entities.findIndex((restaurant) => restaurant.id === action.payload.id)
      // state.entities.splice(index, 1);
      state.entities = state.entities.filter((restaurant) => restaurant.id !== action.payload.id)
    },
    restaurantUpdated(state, action) {
      state.entities.map((restaurant) => {
        if (restaurant.id === action.payload.id) {
          return restaurant.name = action.payload.name;
        } else {
          return state;
        }
      });
    },
  },
});

//export action creators
export const { restaurantAdded, restaurantRemoved, restaurantUpdated } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
