// const filterReducer = (state = null, action) => {
//   switch (action.type) {
//     case "FILTER":
//       return action.filter;
//     default:
//       return state;
//   }
// };
// export const filterApply = (filter) => {
//   return {
//     type: "FILTER",
//     filter,
//   };
// };
// export default filterReducer;

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
