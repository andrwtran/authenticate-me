import React from "react";
import { useDispatch } from 'react-redux';
import { deleteNote } from "../../store/note";
import { useHistory } from 'react-router-dom';
import './DeleteNoteButton.css';

function DeleteNoteButton({ noteId, bookId }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteNote(noteId, bookId));
    history.push(`/books/${bookId}`);
  };

  return (
    <button onClick={handleSubmit}>
      Delete
    </button>
  );

};

export default DeleteNoteButton;
