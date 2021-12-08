import React from "react";
import { useSelector } from 'react-redux';
import './NoteDesk.css';

function NoteDesk() {
  const sessionUser = useSelector(state => state.session.user);

  if (sessionUser) {
    return (
      <div className='notedesk'>
        <form className='notetext'>
          <textarea></textarea>
          <button>Save</button>
          <button>Delete</button>
          <button>Tag</button>
        </form>
      </div>
    )
  }
  return null;
}

export default NoteDesk;
