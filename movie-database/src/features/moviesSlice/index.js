import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// import createSlice
const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies:data,
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        deleteMovie(){},
        updateMovies(){},
    },
});

// generate action dan reducers
const { addMovie, deleteMovie} = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

export {addMovie, deleteMovie};
export default moviesReducer;