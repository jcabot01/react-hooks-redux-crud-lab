import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [],
    },
    reducers: {
        reviewAdded(state, action) {
            state.entities.push({ id: uuid(), ...action.payload });
        },
        reviewRemoved(state, action) {
            const index = state.entities.findIndex((review) => review.id === action.payload)
            state.entities.splice(index, 1);
        },
        reviewUpdated(state, action) {
            state.entities.map((review) => {
                if (review.id === action.payload.id) {
                    return review.comment = action.payload.review;
                } else {
                    return state;
                };
            });
        },
    },
});

//export action creators
export const { reviewAdded, reviewRemoved, reviewUpdated } = reviewsSlice.actions;

export default reviewsSlice.reducer;