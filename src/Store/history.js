import { createSlice } from '@reduxjs/toolkit';
debugger
export const history = createSlice({
  name: 'searchHistory',
  initialState: {
    history: JSON.parse(localStorage.getItem('searchHistory')) || []
  },
  reducers: {
    addSearchEntry: (state, action) => {
      const newEntry = action.payload;
      console.log(newEntry,">>>>>>>>>");
      state.history.unshift(newEntry); // Add new entry to the beginning
      localStorage.setItem('searchHistory', JSON.stringify(state.history)); // Persist to localStorage
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem('searchHistory'); // Clear from localStorage
    },
    loadInitialHistory: (state, action) => {
      state.history = action.payload; // Load history from localStorage or other source
    }
  }
});

export const { addSearchEntry, clearHistory, loadInitialHistory } = history.actions;
export default history.reducer;
