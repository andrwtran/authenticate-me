import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getNotesByTag } from '../../store/note';
import { useSelector, useDispatch } from 'react-redux';
import './TagNoteList.css';

function TagNoteList() {
  const dispatch = useDispatch();

  const { tagId } = useParams();

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  useEffect(() => {
    dispatch(getNotesByTag(tagId))
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
    </div>
  );
};

export default TagNoteList;
