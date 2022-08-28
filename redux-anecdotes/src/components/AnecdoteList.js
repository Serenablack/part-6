import { useSelector, useDispatch } from "react-redux";
import { increaseVote, initializeAnecdote } from "../reducers/anecdoteReducer";
import { anecdoteMessage, interval } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdote = useSelector((state) => state.anecdotes);
  console.log(anecdote);

  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(increaseVote(id));
    dispatch(anecdoteMessage(`You voted ${anecdote.content}`));
    // dispatch((interval(), 4));
  };

  const voteSort = (b, a) => {
    return b.votes - a.votes;
  };

  return (
    <div>
      <h2>create new</h2>
      {anecdote.sort(voteSort).map((anec) => (
        <div key={anec.id}>
          <div>{anec.content}</div>
          <div>
            has {anec.votes}
            <button onClick={() => vote(anec.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
