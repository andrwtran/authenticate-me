import React from "react";
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../store/book';
import './DeleteBookButton.css';

function DeleteBookButton({ bookId }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteBook(bookId));
  };

  return (
    <button onClick={handleSubmit}>
      Delete
    </button>
  );

};

export default DeleteBookButton;
