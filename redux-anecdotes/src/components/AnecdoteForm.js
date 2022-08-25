import { createAnec } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdoteNew.value;
    event.target.anecdoteNew.value = "";
    dispatch(createAnec(content));
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

export default AnecdoteForm;
