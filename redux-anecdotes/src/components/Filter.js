import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterApply } from "../reducers/filterReducer";
const Filter = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const filterHandler = (event) => {
    const toFilter = event.target.value;

    const reqAnec = anecdotes.filter((anec) =>
      anec.content.toLowerCase().includes(toFilter.toLowerCase())
    );
    dispatch(filterApply(reqAnec));
  };
  return (
    <form>
      filter &nbsp;
      <input onChange={filterHandler} />
    </form>
  );
};

export default Filter;
