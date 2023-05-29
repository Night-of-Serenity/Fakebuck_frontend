import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isAuthenticated = true;
    },
  },
});

export default authSlice.reducer;

export const { register } = authSlice.actions;

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
