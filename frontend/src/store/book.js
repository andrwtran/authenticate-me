import { csrfFetch } from './csrf';

const LOAD_BOOKS = 'books/loadBooks';
const ADD_BOOK = 'books/addBook';

export const loadBooks = (books) => {
  return { type: LOAD_BOOKS, books };
};

export const addBook = (newBook) => {
  return { type: ADD_BOOK, newBook };
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch('/api/books');
  const books = await response.json();
  dispatch(loadBooks(books));
  return books;
};

export const createBook = (newBook) => async (dispatch) => {
  const response = await csrfFetch(`/api/books`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBook)
  });
  const book = await response.json();

  if (response.ok) {
    dispatch(addBook(book));
    return book;
  }
};

const initialState = { entries: {} };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      const newState = { ...state, entries: {} };
      action.books.forEach((book) => {
        newState.entries[book.id] = book;
      });
      return newState;
    };
    case ADD_BOOK: {
      const newState = { ...state, entries: { ...state.entries, [action.newBook.id]: action.newBook } };
      return newState;
    };
    default:
      return state;
  }
};

export default bookReducer;
