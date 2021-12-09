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

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  useEffect(() => {
    dispatch(getNotes(bookId));
  }, [dispatch, bookId]);

  return (
    <div>
      <ul>
        {notes.map(({ id, bookId, note_name, note_text }) => (
          <li key={id}>
            <i className="fas fa-sticky-note" />
            <NavLink to={`/books/${bookId}/notes/${id}`}>{note_name}</NavLink>
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
