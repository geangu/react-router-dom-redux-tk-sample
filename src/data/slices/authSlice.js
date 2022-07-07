import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    signin: (state, { payload }) => {
      state.token = payload;
    },
    signout: (state) => {
      state.token = null;
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
