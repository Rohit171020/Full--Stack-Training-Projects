import { createSlice } from '@reduxjs/toolkit';
// import  configureStore  from '@reduxjs/toolkit';
import counterSlice from '../slices/CounterSlice';

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter", 
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
