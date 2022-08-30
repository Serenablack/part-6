import { createAnec } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { anecdoteMessage, interval } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const newAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdoteNew.value;
    event.target.anecdoteNew.value = "";
    const newAnec = await anecdoteService.createNew(content);
    dispatch(createAnec(newAnec));

    dispatch(anecdoteMessage(`${content} created`));
    setTimeout(() => dispatch(interval(null)), 5000);
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
// import { createAnec } from "../reducers/anecdoteReducer";
// import { useDispatch } from "react-redux";
// import { anecdoteMessage } from "../reducers/notificationReducer";

// const AnecdoteForm = () => {
//   const dispatch = useDispatch();
//   const newAnecdote = (event) => {
//     event.preventDefault();
//     const content = event.target.anecdoteNew.value;
//     event.target.anecdoteNew.value = "";
//     dispatch(createAnec(content));
//     dispatch(anecdoteMessage(`${content} created`));
//   };
//   return (
//     <form onSubmit={newAnecdote}>
//       <div>
//         <input name="anecdoteNew" />
//       </div>
//       <button>create</button>
//     </form>
//   );
// };

// export default AnecdoteForm;
