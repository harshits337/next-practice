// app/store.js
'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import toastSlice from './toastSlice';
import spinnerSlice from './spinnerSlice';
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  toast : toastSlice.reducer,
  spinner : spinnerSlice.reducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });