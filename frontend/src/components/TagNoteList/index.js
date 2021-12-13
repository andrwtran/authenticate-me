import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getAllNotes } from '../../store/note';
import { getAllTaggedNotes } from '../../store/taggedNote';
import { useSelector, useDispatch } from 'react-redux';
import './TagNoteList.css';

function TagNoteList() {
  const dispatch = useDispatch();

  const { tagId } = useParams();

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  const taggedNotesObj = useSelector((state) => state.taggedNote.entries);
  const taggedNotes = Object.values(taggedNotesObj);

  const matches = taggedNotes.filter((taggedNote) => taggedNote.tagId === +tagId);
  const matchingNoteIds = matches.map((match) => match.noteId);
  const matchingNotes = notes.filter((note) => matchingNoteIds.includes(note.id));

  useEffect(() => {
    dispatch(getAllNotes());
    dispatch(getAllTaggedNotes());
  }, [dispatch, tagId])

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
    <div className="tagNoteList">
      <ul>
        {matchingNotes.map(({ id, bookId, note_name }) => (
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
        {matchingNotes.length === 0 && <p style={{ color: 'white' }}>No notes with this tag</p>}
      </ul>
    </div>
  );
};

export default TagNoteList;
