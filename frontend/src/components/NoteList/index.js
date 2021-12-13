import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/note';
import { useParams, NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";
import EditNoteInput from "../EditNoteInput";
import './NoteList.css';

function NoteList({ setShowAddNoteForm }) {
  const dispatch = useDispatch();

  const { bookId } = useParams();
  const booksObj = useSelector((state) => state.book.entries);

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  useEffect(() => {
    dispatch(getNotes(bookId));
  }, [dispatch, bookId, booksObj]);

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


  return (
    <div className="noteList">
      <ul>
        {notes.map(({ id, bookId, note_name }) => (
          <li key={id}>
            <span style={iconStyle}>
              <i className="fas fa-sticky-note" />
            </span>
            <NavLink
            to={`/books/${bookId}/notes/${id}`}
            activeStyle={activeLinkStyle}
            style={linkStyle}
            >{note_name}</NavLink>
          </li>
        ))}
      </ul>
      <Route path='/books/:bookId/notes/:noteId'>
          <EditNoteInput setShowAddNoteForm={setShowAddNoteForm}/>
      </Route>
    </div>
  );

};


export default NoteList;
