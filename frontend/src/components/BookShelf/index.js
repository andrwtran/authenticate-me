import React from "react";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../store/book';
import { Route, NavLink } from 'react-router-dom';
import AddBookInput from "../AddBookInput";
import EditBookInput from "../EditBookInput";
import AddNoteInput from "../AddNoteInput";
import NoteList from "../NoteList";
import DeleteBookButton from "../DeleteBookButton";
import './BookShelf.css';

function BookShelf() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const booksObj = useSelector((state) => state.book.entries);
  const books = Object.values(booksObj);

  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [showEditBookForm, setShowEditBookForm] = useState(false);
  const [editBookId, setEditBookId] = useState(null);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleAddBookClick = (e) => {
    e.preventDefault();
    setShowAddBookForm(!showAddBookForm);
  };

  const handleAddNoteClick = (e) => {
    e.preventDefault();
    setShowAddNoteForm(!showAddNoteForm);
  };

  if (sessionUser) {
    return (
      <div>
        <h2>BOOKS</h2>
        <button onClick={handleAddBookClick}>
          <i className="fas fa-plus-square" />
        </button>
        {showAddBookForm && <AddBookInput />}
        <ul>
          {books.map(({ id, book_name }) => (
            <li key={id}>
              <i className="fas fa-book" />
              <NavLink to={`/books/${id}`}>{book_name}</NavLink>
              <button onClick={(e) => {
                e.preventDefault();
                setShowEditBookForm(!showEditBookForm);
                setEditBookId(id);
              }}>
                <i className="fas fa-edit" />
              </button>
              <DeleteBookButton bookId={id} />
            </li>
          ))}
        </ul>
        {showEditBookForm && <EditBookInput bookId={editBookId} setShowEditBookForm={setShowEditBookForm} setEditBookId={setEditBookId} />}
        <h2>NOTES</h2>
          <Route path={`/books/:bookId`}>
            <button onClick={handleAddNoteClick}>
              <i className="fas fa-plus-square" />
            </button>
            {showAddNoteForm && <AddNoteInput setShowAddNoteForm={setShowAddNoteForm}/>}
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
