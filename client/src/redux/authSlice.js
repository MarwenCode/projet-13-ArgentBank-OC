import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  token: localStorage.getItem('token') || null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
  
      state.token = action.payload.token;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
    
      state.token = null;
      // localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, setError, logout } = authSlice.actions;

export default authSlice.reducer;






