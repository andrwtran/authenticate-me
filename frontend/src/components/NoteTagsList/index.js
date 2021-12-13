import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTagsByNoteId } from '../../store/tag';
import { getAllTaggedNotes, deleteTaggedNote } from '../../store/taggedNote';
import TagNoteInput from '../TagNoteInput';
import './NoteTagsList.css';

function NoteTagsList({ noteId }) {
  const dispatch = useDispatch();

  // const tagsObj = useSelector((state) => state.tag.entries);
  // const tags = Object.values(tagsObj);
  const matchTags = dispatch(getTagsByNoteId(noteId));
  console.log('!!!!!', matchTags)

  const taggedNotesObj = useSelector((state) => state.taggedNote.entries);
  const taggedNotes = Object.values(taggedNotesObj);

  useEffect(() => {
    dispatch(getAllTaggedNotes());
  }, [dispatch, noteId]);

  return (
    <span className="taglist">
    <ul>
      {matchTags.length > 0 && matchTags.map((tag) => (
        <li id={`tag-${tag.id}`} key={tag.id}>
          <i className="fas fa-tag" />
          {tag.tag_name}
          <button onClick={(e) => {
             e.preventDefault();
             const taggedNote = taggedNotes.find((taggedNote) => taggedNote.tagId === tag.id);
             dispatch(deleteTaggedNote(taggedNote.id));
             const li = document.getElementById(`tag-${tag.id}`);
             li.innerHTML = '';
          }}>
            <i className="fas fa-trash" />
          </button>
        </li>
      ))}
      {matchTags.length === 0 && 'No Tags'}
    </ul>
      <TagNoteInput />
  </span>
  )
}

export default NoteTagsList;
