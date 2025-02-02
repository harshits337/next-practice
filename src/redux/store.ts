// app/store.js
'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import toastSlice from './toastSlice';
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  toast : toastSlice.reducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });