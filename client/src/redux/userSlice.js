import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    clearUser: (state) => {
      state.id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
    }
  },
});

export const { getUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;


