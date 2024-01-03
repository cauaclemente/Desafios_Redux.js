import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./context/CounterSlice";

const store = configureStore ({
    reducer: {
        counter: counterReducer,
    }
}) 

export default store