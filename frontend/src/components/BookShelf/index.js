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
import SearchBox from "../SearchBox";
import TagList from "../TagList";
import './BookShelf.css';

function BookShelf() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const booksObj = useSelector((state) => state.book.entries);
  const books = Object.values(booksObj);

  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [showEditBookForm, setShowEditBookForm] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [editBookId, setEditBookId] = useState(null);


  const linkStyle = {
    margin: "1rem",
    color: 'white'
  };

  const activeLinkStyle = {
    color: "gray",
  }

  const iconStyle = {
    color: "white"
  }

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleAddBookClick = (e) => {
    e.preventDefault();
    setShowEditBookForm(false);
    setShowAddBookForm(!showAddBookForm);
  };

  const handleAddNoteClick = (e) => {
    e.preventDefault();
    setShowAddNoteForm(!showAddNoteForm);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setShowSearchBox(!showSearchBox);
  };

  if (sessionUser) {
    return (
      <div className="bookshelf">
        <h2>BOOKS</h2>
        <button onClick={handleAddBookClick}>
          <i className="fas fa-plus-square" /> Add
        </button>
        {showAddBookForm && <AddBookInput />}
        <ul>
          {books.map(({ id, book_name }) => (
            <li key={id}>
              <span style={iconStyle}>
                <i className="fas fa-book" />
              </span>
              <NavLink
                to={`/books/${id}`}
                activeStyle={activeLinkStyle}
                style={linkStyle}
              >{book_name}</NavLink>
              <button onClick={(e) => {
                e.preventDefault();
                setShowAddBookForm(false);
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
        <Route exact path='/'>
          <button onClick={handleSearchClick}>
            <i className="fas fa-search" /> Search
          </button>
          {showSearchBox && <SearchBox setShowSearchBox={setShowSearchBox}/>}
        </Route>
        <Route path={`/books/:bookId`}>
          <button onClick={handleAddNoteClick}>
            <i className="fas fa-plus-square" /> Add
          </button>
          {showAddNoteForm && <AddNoteInput setShowAddNoteForm={setShowAddNoteForm} />}
          <NoteList setShowAddNoteForm={setShowAddNoteForm} />
        </Route>
        <h2>TAGS</h2>
          <TagList />
      </div>
    )
  }
  return null;
};

export default BookShelf;
