// features/counterSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';


const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    message : '',
    type : '',
    show : false,
    duration : 0


  },
  reducers: {
    setToastState(state, action) {
        console.log("action payload", action.payload)
        state.message = action.payload.message;
        state.type = action.payload.type;
        state.show = action.payload.show;
        state.duration = action.payload.duration;
       
    }
  },
});

export const {setToastState } = toastSlice.actions;
export default toastSlice;