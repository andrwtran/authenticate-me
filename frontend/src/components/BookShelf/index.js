import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../store/book';
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
        <ul>
          {books.map(({book_name}) => (
            <li>{book_name}</li>
          ) )}
        </ul>
        <h3>NOTES</h3>
        <ul>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 3</li>
        </ul>
        <h4>TAGS</h4>
        <ul>
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </div>
    )
  }
  return null;
};

export default BookShelf;
