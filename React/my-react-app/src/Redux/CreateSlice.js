import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, history: [], reset: false},
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
            state.history.push(state.count);
        },
        decrement: (state) => {
            state.count -= 1;
            state.history.push(state.count);
        },
        reset: (state) => {
            state.count = 0
            state.history = [];
        },
    },
});

console.log("CounterSlice.Action: ", CounterSlice);

export const {increment, decrement, reset} = CounterSlice.actions;
export default CounterSlice.reducer;