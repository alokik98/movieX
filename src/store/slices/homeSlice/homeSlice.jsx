import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration(state, action) {
            state.url = action.payload
        },
        getGenres(state, action) {
            state.url = action.payload
        }
    }
});

export default homeSlice.reducer;
export const { getApiConfiguration, getGenres } = homeSlice.actions