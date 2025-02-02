// features/counterSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';


const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: {
    show : false,


  },
  reducers: {
    setSpinnerState(state, action) {
        state.show = action.payload.show;
    }
  },
});

export const {setSpinnerState } = spinnerSlice.actions;
export default spinnerSlice;