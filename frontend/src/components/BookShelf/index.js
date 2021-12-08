import React from "react";
import { useSelector } from 'react-redux';
import './BookShelf.css';

function BookShelf() {
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    return (
      <div>
        <h2>BOOKS</h2>
        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
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
