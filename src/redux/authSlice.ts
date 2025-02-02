// features/counterSlice.js
'use client';
import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin : false,
    userDetails : null,
    authToken : null
  },
  reducers: {
    setAuthState(state, action) {
        state.isLogin = action.payload.isLogin;
        state.userDetails = action.payload.userDetails;
        state.authToken = action.payload.authToken;
    }
  },
});

export const {setAuthState } = authSlice.actions;
export default authSlice;