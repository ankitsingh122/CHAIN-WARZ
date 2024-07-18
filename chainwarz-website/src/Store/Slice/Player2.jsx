import { createSlice } from "@reduxjs/toolkit";

const Player2 = createSlice({
  name: "player2",
  initialState: {
    player2: null,
  },
  reducers: {
    login2(state, action) {
      state.player2 = action.payload;
    },
    logout2(state) {
      state.player2 = null;
    },
  },
});


export const {login2, logout2} = Player2.actions
export {Player2};