import { useSelector, useDispatch } from "react-redux";
import { increaseVote } from "../reducers/anecdoteReducer";
import { anecdoteMessage, interval } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const voteSort = (a, b) => {
    return b.votes - a.votes;
  };
  const anecdote = useSelector(({ anecdotes, filter }) => {
    if (filter === null) {
      return [...anecdotes].sort(voteSort);
    } else {
      const reqAnec = anecdotes.filter((anec) =>
        anec.content.toLowerCase().includes(filter.toLowerCase())
      );
      return reqAnec;
    }
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(increaseVote(id));
    const anecdoteReq = anecdote.find((anec) => id === anec.id);
    dispatch(anecdoteMessage(`You voted ${anecdoteReq.content}`));
    setTimeout(() => dispatch(interval(null)), 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      {anecdote.map((anec) => (
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
