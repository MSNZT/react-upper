import { createSlice } from '@reduxjs/toolkit'
import {CounterSchema} from "../types/CounterSchema";

const initialState: CounterSchema = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { actions: counterActions } = counterSlice
// export const { increment, decrement } = counterSlice.actions
export const {reducer: counterReducer} = counterSlice;
