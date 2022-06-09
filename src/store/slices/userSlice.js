import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {...action.payload};
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
