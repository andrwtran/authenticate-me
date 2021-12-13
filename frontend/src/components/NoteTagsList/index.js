import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTaggedNotes, deleteTaggedNote } from '../../store/taggedNote';
import TagNoteInput from '../TagNoteInput';
import './NoteTagsList.css';

function NoteTagsList({ noteId }) {
  const dispatch = useDispatch();

  const tagsObj = useSelector((state) => state.tag.entries);
  const tags = Object.values(tagsObj);

  const taggedNotesObj = useSelector((state) => state.taggedNote.entries);
  const taggedNotes = Object.values(taggedNotesObj);

  const matches = taggedNotes.filter((taggedNote) => taggedNote.noteId === +noteId);
  const matchingTagIds = matches.map((match) => match.tagId);
  const matchingTags = tags.filter((tag) => matchingTagIds.includes(tag.id));
  const nonMatchingTags = tags.filter((tag) => !matchingTagIds.includes(tag.id));

  useEffect(() => {
    dispatch(getAllTaggedNotes());
  }, [dispatch, noteId]);

  return (
    <>
      <span className="taglist">
        <ul>
          {matchingTags.length > 0 && matchingTags.map((tag) => (
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
          {matchingTags.length === 0 && 'No Tags'}
        </ul>
      </span>
      <TagNoteInput nonMatchingTags={nonMatchingTags} noteId={noteId} />
    </>
  )
}

export default NoteTagsList;
