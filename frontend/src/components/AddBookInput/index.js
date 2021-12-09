import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../../store/book';
import './AddBookInput.css';

function AddBookInput() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      book_name: name
    };
    dispatch(createBook(newBook));
  };

  return (
    <div>
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

export default AddBookInput;
