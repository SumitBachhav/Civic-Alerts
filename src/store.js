import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./redux/ToggleSlice";

export const store = configureStore({
    reducer : {
        toggle: toggleSlice
    },
})