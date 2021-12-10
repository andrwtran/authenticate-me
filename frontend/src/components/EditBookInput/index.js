import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../../store/book';
import './EditBookInput.css';

function EditBookInput( { bookId, setShowEditBookForm, setEditBookId }) {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book.entries[bookId]);

  const [name, setName] = useState(book.book_name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return alert('Your book must have a name.')
    }

    const payload = {
      ...book,
      book_name: name
    };
    dispatch(updateBook(payload));
    setShowEditBookForm(false);
    setEditBookId(null);
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
