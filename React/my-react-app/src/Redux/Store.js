import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CreateSlice"

const store = configureStore({
    reducer: CounterSlice
})

export default store;