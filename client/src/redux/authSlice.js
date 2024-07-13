import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  // user: JSON.parse(localStorage.getItem('user')) || null,
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
      // localStorage.setItem('user', JSON.stringify(action.payload.user));
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










// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/v1/user/signup', userData);
//       return response.data.body;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );