const LOAD_NOTES = 'notes/loadNotes';

export const loadNotes = (notes) => {
  return { type: LOAD_NOTES, notes };
};

export const getNotes = (bookId) => async (dispatch) => {
  const response = await fetch(`/api/books/${bookId}`);
  const notes = await response.json();
  dispatch(loadNotes(notes));
  return notes;
};

const initialState = { entries: {} };

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      const newState = { ...state, entries: {} };
      action.notes.forEach((note) => {
      newState.entries[note.id] = note;
      });
      return newState;
    default:
      return state;
  }
};

export default noteReducer;
