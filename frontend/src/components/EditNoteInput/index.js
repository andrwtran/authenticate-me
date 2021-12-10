import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/note';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import DeleteNoteButton from "../DeleteNoteButton";
import './EditNoteInput.css';

function EditNoteInput({ setShowAddNoteForm }) {
  const dispatch = useDispatch();

  const { noteId } = useParams();

  const history = useHistory()

  const note = useSelector((state) => state.note.entries[noteId]);

  const [name, setName] = useState(note.note_name);
  const [text, setText] = useState(note.note_text);

  useEffect(() =>{
    setShowAddNoteForm(false);
  });

  useEffect(() => {
    setName(note.note_name);
    setText(note.note_text);
  }, [noteId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Your note must have a name.')
    }
    const payload = {
      ...note,
      note_name: name,
      note_text: text
    };
    dispatch(updateNote(payload));
    history.push(`/books/${note.bookId}`);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/books/${note.bookId}`);
  }

  return (
    <div className='editNote'>
      <form className='noteForm' onSubmit={handleSubmit}>
        <div>
          <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="New Note"
          name="name"
          />
        </div>
        <div>
          <textarea
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          name="text"
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <DeleteNoteButton noteId={noteId} bookId={note.bookId}/>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditNoteInput;
