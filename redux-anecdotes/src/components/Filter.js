import React from "react";
import { useDispatch } from "react-redux";
import { filterApply } from "../reducers/filterReducer";
const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = (event) => {
    const toFilter = event.target.value;

    // console.log(reqAnec);
    dispatch(filterApply(toFilter));
  };
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      filter &nbsp;
      <input onChange={filterHandler} />
    </div>
  );
};

export default Filter;
