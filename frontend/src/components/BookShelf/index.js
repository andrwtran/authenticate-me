import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../store/book';
import { Route, NavLink } from 'react-router-dom';
import AddBookInput from "../AddBookInput";
import NoteList from "../NoteList";
import './BookShelf.css';

function BookShelf() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const booksObj = useSelector((state) => state.book.entries);
  const books = Object.values(booksObj);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (sessionUser) {
    return (
      <div>
        <h2>BOOKS</h2>
        <AddBookInput />
        <ul>
          {books.map(({ id, book_name }) => (
            <li key={id}>
              <i className="fas fa-book" />
              <NavLink to={`/books/${id}`}>{book_name}</NavLink>
            </li>
          ))}
        </ul>
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
