import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";
// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    initAnecdote(state, action) {
      return action.payload;
    },
    incVote(state, action) {
      console.log(state);
      const id = action.payload;
      const updatedObj = state.find((Obj) => Obj.id === id);
      console.log(updatedObj);
      const anecdote = {
        ...updatedObj,
        votes: updatedObj.votes + 1,
      };
      return state.map((anec) => (anec.id !== id ? anec : anecdote));
    },
    createAnec(state, action) {
      const content = action.payload;
      return [...state, content];
    },
    appendAnecdotes(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
    // case "InitAnec": initializeAnecdote = () => {
    //   return {
    //     type: "InitAnec",
    //     data: initialState,
    //   };
    // };
    //   return action.data;
  },
});
export const { initAnecdote, incVote, appendAnecdotes, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();

    dispatch(initAnecdote(anecdotes));
  };
};

export const createAnec = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdoteService.createNew(content);
    dispatch(appendAnecdotes(newAnec));
  };
};
export const increaseVote = (anectoUpdate) => {
  return async (dispatch) => {
    const anecdote = dispatch(incVote(anectoUpdate.id));
    console.log(anecdote);
    const updatedAnec = await anecdoteService.update({
      ...anectoUpdate,
      votes: anectoUpdate.votes + 1,
    });
    // dispatch(setAnecdotes(updatedAnec));
  };
};

// const anecdoteReducer = (state = initialState, action) => {
//   console.log("state now: ", state);
//   console.log("action", action);
//   switch (action.type) {
//     case "VOTE":
//       const id = action.data;
//       const updatedObj = state.find((Obj) => Obj.id === id);
//       const anecdote = {
//         ...updatedObj,
//         votes: updatedObj.votes + 1,
//       };
//       return state.map((anec) => (anec.id !== id ? anec : anecdote));
//     case "NEW":
//       return state.concat(action.data);

//     // case "InitAnec":
//     //   return action.data;
//     default:
//       return state;
//   }
// };

// export const increaseVote = (id) => {
//   return { type: "VOTE", data: id };
// };

// export const createAnec = (anecdote) => {
//   return {
//     type: "NEW",
//     data: {
//       content: anecdote,
//       id: getId(),
//       votes: 0,
//     },
//   };
// };

// export const initializeAnecdote = () => {
//   return {
//     type: "InitAnec",
//     data: initialState,
//   };
// };

// export default anecdoteReducer;
