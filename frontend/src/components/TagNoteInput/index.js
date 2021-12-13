import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTags } from '../../store/tag';
import { createTaggedNote } from '../../store/taggedNote';
import './TagNoteInput.css';

function TagNoteInput({ nonMatchingTags, noteId }) {
  const dispatch = useDispatch();

  const tagsObj = useSelector((state) => state.tag.entries);
  const tags = Object.values(tagsObj);

  const [tagId, setTagId] = useState('');

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      noteId,
      tagId
    };
    dispatch(createTaggedNote(payload));
  };

  return (
    <span>
      <select
      name="tagId"
      onChange={(e) => setTagId(e.target.value)}
      value={tagId}
      >
        {nonMatchingTags.length > 0 && nonMatchingTags.map((tag) => (
          <option value={tag.id}>{tag.tag_name}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add Tag</button>
    </span>
  );
};

export default TagNoteInput;
