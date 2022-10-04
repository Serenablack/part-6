import { createAnec } from "../reducers/anecdoteReducer";
// import { useDispatch } from "react-redux";

import { connect } from "react-redux";

import { anecdoteMessage, interval } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdoteNew.value;
    event.target.anecdoteNew.value = "";
    // dispatch(createAnec(content));
    props.createAnec(content);
    props.anecdoteMessage(`${content} created`);
    // dispatch(anecdoteMessage(`${content} created`));
    setTimeout(
      () =>
        // dispatch(interval(null))
        props.interval(null),
      5000
    );
  };
  return (
    <form onSubmit={newAnecdote}>
      <div>
        <input name="anecdoteNew" />
      </div>
      <button>create</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
  };
};
const mapDispatchToProps = { createAnec, anecdoteMessage, interval };
const ConnectedAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm);
export default ConnectedAnecdote;

// export default AnecdoteForm;
