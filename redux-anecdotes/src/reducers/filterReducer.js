import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: null,
  reducers: {
    filterApply(state, action) {
      return action.payload;
    },
  },
});

export const { filterApply } = filterSlice.actions;
export default filterSlice.reducer;
