import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTag } from '../../store/tag';
import './AddTagInput.css';

function AddTagInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const reset = () => {
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Your tag must have a name.')
    }

    const newTag = {
      tag_name: name
    };
    dispatch(createTag(newTag));
    reset();
  };

  return (
    <div className="addTagInputBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="New Tag"
          name="name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddTagInput;
