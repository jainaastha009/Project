import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import searchHistoryReducer from './history'; // Ensure the import matches the file name

export const store = configureStore({
  reducer: {
    user: userReducer,
    searchHistory: searchHistoryReducer // Correct the spelling of the key
  }
});
