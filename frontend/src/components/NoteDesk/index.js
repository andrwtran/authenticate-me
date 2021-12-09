import React from "react";
import { useSelector } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import './NoteDesk.css';

function NoteDesk() {
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    return (
      <Switch>
        <Route path='/books/:bookId/notes'>
          <div className='notedesk'>
            <form className='notetext'>
              <textarea></textarea>
              <button>Save</button>
              <button>Delete</button>
              <button>Tag</button>
            </form>
          </div>
        </Route>
      </Switch>
    )
  }
  return null;
}

export default NoteDesk;
