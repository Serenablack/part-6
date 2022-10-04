import React from "react";
import { connect } from "react-redux";

import { filterApply } from "../reducers/filterReducer";
const Filter = (props) => {
  // const dispatch = useDispatch();

  const filterHandler = (event) => {
    const toFilter = event.target.value;

    // console.log(reqAnec);
    // dispatch(filterApply(toFilter));
    props.filterApply(toFilter);
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};
// export default Filter;
const mapDispatchToProps = {
  filterApply,
};
const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default ConnectedFilter;
