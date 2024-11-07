import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: localStorage.getItem('username') || ''
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload); // Persist username to localStorage
    },
    clearUser: (state) => {
      state.username = '';
      localStorage.removeItem('username'); // Clear from localStorage
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
