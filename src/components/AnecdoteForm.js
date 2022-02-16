import React from "react";
import { useDispatch } from "react-redux";
import { addNewAnectode } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnectode = (e) => {
    e.preventDefault();
    const tode = e.target.anectode.value;

    e.target.anectode.value = "";

    dispatch(addNewAnectode(tode));
  };
  return (
    <div>
      {" "}
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

export default AnecdoteForm;
