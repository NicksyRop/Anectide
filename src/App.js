import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAnectode, voteAnectode } from "./reducers/anecdoteReducer";

const App = () => {
  const anecdotes = useSelector((state) => state);

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnectode(id));
  };
  const addAnectode = (e) => {
    e.preventDefault();
    const tode = e.target.anectode.value;

    e.target.anectode.value = "";

    dispatch(createAnectode(tode));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnectode}>
        <div>
          <input name="anectode" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
