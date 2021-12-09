import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotes } from '../../store/note';
import { useParams, NavLink } from 'react-router-dom';
import './NoteList.css';

function NoteList() {
  const dispatch = useDispatch();

  const { bookId } = useParams();

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  useEffect(() => {
    dispatch(getNotes(bookId));
  }, [bookId]);

  return (
    <div>
      <ul>
        {notes.map(({ id, bookId, note_name }) => (
          <li key={id}>
            <i className="fas fa-sticky-note" />
            <NavLink to={`/books/${bookId}/notes/${id}`}>{note_name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );

};


export default NoteList;
