import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
};

export const registerAsync = createAsyncThunk("auth/registerAsync", async (input, thunkApi) => {
  try {
    const res = await authService.register(input);
    setAccessToken(res.data.accessToken);
    return;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  //   reducers: {
  //     register: (state, action) => {
  //       state.isAuthenticated = true;
  //     },
  //   },
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default authSlice.reducer;

// export const { register } = authSlice.actions;

// action object { type: 'register' }
// action creator register => () => ({ type: 'register' })

// action => dispatch => reducer => new state => update UI
// { type: 'register' } => dispatch({ type: 'auth/register' })
// const register = () => ({ type: 'auth/register' })
// dispatch(register())

// createSlice() create action creator fucntion like this
// const login = (payload) => ({type: 'auth/login', payload: payload})

// this is how dispatch(actionObject)
// dispatch({ type: 'auth/login', payload: { email: 'a@gmail.com' } })
// dispatch(login({ email: 'a@gmail.com' }))

// createSlice() create reducer method like this
// function reducer(state,action) {
//   switch (action.type) {
//     case 'auth/register': {
//       state.isAuthenticated = true;
//     }
//     case 'auth/login': {
//       state.isAuthenticated = true
//     }
//   }
// }
