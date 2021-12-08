const LOAD_BOOKS = 'books/loadBooks';

export const loadBooks = (books) => {
  return { type: LOAD_BOOKS, books };
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch('/api/books');
  const books = await response.json();
  dispatch(loadBooks(books));
  return books;
};

const initialState = { entries: {} };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      const newState = { ...state, entries: {} };
      action.books.forEach((book) => {
      newState.entries[book.id] = book;
      });
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
