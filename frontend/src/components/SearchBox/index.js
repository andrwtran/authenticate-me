import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllNotes } from '../../store/note';
import './SearchBox.css';

function SearchBox({ setShowSearchBox }) {
  const dispatch = useDispatch();
  const [terms, setTerms] = useState("");
  const [results, setResults] = useState([]);

  const notesObj = useSelector((state) => state.note.entries);
  const notes = Object.values(notesObj);

  const linkStyle = {
    margin: "1rem",
    color: 'white'
  };

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!terms) {
      return alert('Your must enter terms for your search.')
    };

    const searchResults = notes.filter((note) => (
      note.note_name.toUpperCase().includes(terms.toUpperCase()) || note.note_text.toUpperCase().includes(terms.toUpperCase())
    ));

    if (!searchResults.length) {
      return alert('There were no matches for your search.')
    }

    setResults(searchResults);
    setTerms('');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowSearchBox(false);
  };

  return (
    <div className='searchBox'>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTerms(e.target.value)}
          value={terms}
          placeholder="What are you looking for?"
          name="terms"
        />
        <button type="submit">Search</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
      <ul>
        {results.length > 0 && results.map((note) => (
          <li key={note.id} onClick={(e) => {
            e.preventDefault();
            setShowSearchBox(false);
          }}>
            <NavLink
              to={`books/${note.bookId}/notes/${note.id}`}
              style={linkStyle}
            >
              {note.note_name}
            </NavLink>
          </li>))}
      </ul>
    </div>
  );
};

export default SearchBox;
