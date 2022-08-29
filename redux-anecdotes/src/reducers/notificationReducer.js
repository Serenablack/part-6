import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    anecdoteMessage(state, action) {
      return action.payload;
    },
    interval(state, action) {
      return action.payload;
    },
  },
});

export const { anecdoteMessage, interval } = notificationSlice.actions;
export default notificationSlice.reducer;
