import { csrfFetch } from './csrf';

const LOAD_NOTES = 'notes/LOAD_NOTES';
const ADD_NOTE = 'notes/ADD_NOTE';

export const load = (notes) => {
  return { type: LOAD_NOTES, notes };
};

const add = (newNote) => {
  return { type: ADD_NOTE, newNote };
};

export const getNotes = (bookId) => async (dispatch) => {
  const response = await fetch(`/api/books/${bookId}`);
  const notes = await response.json();
  dispatch(load(notes));
  return notes;
};

export const createNote = (newNote) => async (dispatch) => {
  const { bookId } = newNote;
  const response = await csrfFetch(`/api/books/${bookId}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newNote)
  });
  const note = await response.json();

  if (response.ok) {
    dispatch(add(note));
    return note;
  }
};

const initialState = { entries: {} };

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTES: {
      const newState = { ...state, entries: {} };
      action.notes.forEach((note) => {
      newState.entries[note.id] = note;
      });
      return newState;
    };
    case ADD_NOTE: {
      const newState = { ...state, entries: { ...state.entries, [action.newNote.id]: action.newNote } };
      return newState;
    };
    default:
      return state;
  }
};

export default noteReducer;
