import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnectode } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anectodes }) => {
    return anectodes;
  });
  console.log(anecdotes);

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnectode(id));
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
    </div>
  );
};

export default AnecdoteList;
