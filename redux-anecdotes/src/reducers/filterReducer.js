const filterReducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER":
      return action.filter;
    default:
      return state;
  }
};
export const filterApply = (filter) => {
  return {
    type: "FILTER",
    filter,
  };
};
export default filterReducer;
