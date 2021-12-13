import { csrfFetch } from './csrf';

const LOAD_TAGS = 'tags/LOAD_TAGS';

const load = (tags) => {
  return { type: LOAD_TAGS, tags };
};

export const getAllTags = () => async (dispatch) => {
  const response = await fetch('/api/tags');
  const tags = await response.json();
  dispatch(load(tags));
  return tags;
};

const initialState = { entries: {} };

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TAGS: {
      const newState = { ...state, entries: {} };
      for (let i = 0; i < action.tags.length; i++) {
        let tag = action.tags[i];
        newState.entries[tag.id] = tag;
      }
      return newState;
    };
    default:
      return state;
  }
};

export default tagReducer;
