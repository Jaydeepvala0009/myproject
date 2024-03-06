import { createSlice } from '@reduxjs/toolkit';

const logoutSlice = createSlice({
  name: 'authlogout',
  initialState: { user: null },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { logoutUser } = logoutSlice.actions;
export const selectUser = (state) => state.auth.user;

export default logoutSlice.reducer;
