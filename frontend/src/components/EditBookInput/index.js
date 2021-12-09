import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../../store/book';
import './EditBookInput.css';

function EditBookInput( { bookId, setShowEditForm }) {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book.entries[bookId]);

  const [name, setName] = useState(book.book_name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...book,
      book_name: name
    };
    console.log('!!!!', payload);
    dispatch(updateBook(payload));
    setShowEditForm(false);
  };

  return (
    <div className="editBookInputBox">
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

export default EditBookInput;
