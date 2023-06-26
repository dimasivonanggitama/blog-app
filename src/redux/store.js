import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../components/features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    },
})