import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTag } from '../../store/tag';
import './EditTagInput.css';

function EditTagInput( { tagId, setShowEditTagForm, setEditTagId }) {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.tag.entries[tagId]);

  const [name, setName] = useState(tag.tag_name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Your tag must have a name.')
    }

    const payload = {
      ...tag,
      tag_name: name
    };
    dispatch(updateTag(payload));
    setShowEditTagForm(false);
    setEditTagId(null);
  };

  return (
    <div className="editTagInputBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditTagInput;
