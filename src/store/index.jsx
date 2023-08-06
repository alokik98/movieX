import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice/homeSlice";
export const store = configureStore({
    reducer: {
        home: homeSlice
    }
})