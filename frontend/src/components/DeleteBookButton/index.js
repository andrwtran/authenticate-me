import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteBook } from '../../store/book';
import './DeleteBookButton.css';

function DeleteBookButton({ bookId }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteBook(bookId));
    history.push('/');
  };

  return (
    <button onClick={handleSubmit}>
      <i className="fas fa-trash" />
    </button>
  );

};

export default DeleteBookButton;
