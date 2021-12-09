import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../store/book';
import { Route, NavLink } from 'react-router-dom';
import AddBookInput from "../AddBookInput";
import EditBookInput from "../EditBookInput";
import NoteList from "../NoteList";
import DeleteBookButton from "../DeleteBookButton";
import './BookShelf.css';

function BookShelf() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const booksObj = useSelector((state) => state.book.entries);
  const books = Object.values(booksObj);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editBookId, setEditBookId] = useState(null);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleAddClick = (e) => {
    e.preventDefault();
    setShowAddForm(!showAddForm);
  };

  if (sessionUser) {
    return (
      <div>
        <h2>BOOKS</h2>
        <button onClick={ handleAddClick }>
          <i className="fas fa-plus-square" />
        </button>
        {showAddForm && <AddBookInput />}
        <ul>
          {books.map(({ id, book_name }) => (
            <li key={id}>
              <i className="fas fa-book" />
              <NavLink to={`/books/${id}`}>{book_name}</NavLink>
              <button onClick={(e) => {
                e.preventDefault();
                setShowEditForm(!showEditForm);
                setEditBookId(id);
              }}>
                <i className="fas fa-edit" />
              </button>
              <DeleteBookButton bookId={id} />
            </li>
          ))}
        </ul>
        {showEditForm && <EditBookInput bookId={ editBookId } setShowEditForm={ setShowEditForm } />}
        <h2>NOTES</h2>
            <Route path={`/books/:bookId`}>
              <NoteList />
            </Route>
        <h2>TAGS</h2>
        <ul>
          <li>TO-DO</li>
        </ul>
      </div>
    )
  }
  return null;
};

export default BookShelf;
