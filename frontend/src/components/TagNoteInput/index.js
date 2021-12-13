import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTags } from '../../store/tag';
import { createTaggedNote } from '../../store/taggedNote';
import './TagNoteInput.css';

function TagNoteInput() {
  const dispatch = useDispatch();

  const tagsObj = useSelector((state) => state.tag.entries);
  const tags = Object.values(tagsObj);

  const [newTag, setNewTag] = useState(null);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='tagForm' onSubmit={handleSubmit}>
    <select
    name="newTag"
    onChange={(e) => setNewTag(e.target.value)}
    value={newTag}
    >
      {tags.length > 0 && tags.map((tag) => (
        <option value={tag.tag_name}>{tag.tag_name}</option>
      ))}
    </select>
  </form>
  );
};

export default TagNoteInput;
