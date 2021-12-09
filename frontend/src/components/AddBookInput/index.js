import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../store/book';
import './AddBookInput.css';

function AddBookInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      book_name: name
    };
    dispatch(createBook(newBook));
    reset();
  };

  return (
    <div className="addBookInputBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="New Book"
          name="name"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBookInput;
