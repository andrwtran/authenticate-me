import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../store/note';
import { useParams } from 'react-router-dom';
import './AddNoteInput.css';

function AddNoteInput({ setShowAddNoteForm }) {
  const dispatch = useDispatch();

  const { bookId } = useParams();
  console.log(bookId);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      note_name: name,
      note_text: text,
      bookId
    };
    dispatch(createNote(newNote));
    setShowAddNoteForm(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowAddNoteForm(false);
  }

  return (
    <div className='addNote'>
      <form className='noteForm' onSubmit={handleSubmit}>
        <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="New Note"
        name="name"
        />
        <textarea
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        name="text"
        />
        <div>
          <button type="submit">Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteInput;
