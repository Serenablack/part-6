import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    anecMessage(state, action) {
      return action.payload;
    },
    interval(state, action) {
      return action.payload;
    },
  },
});

export const { anecMessage, interval } = notificationSlice.actions;
export default notificationSlice.reducer;
let timeoutID = null;

export const anecdoteMessage = (message, time) => {
  return async (dispatch) => {
    dispatch(anecMessage(message));
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => dispatch(interval(null)), time);
  };
};
