import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTag } from "../../store/tag";
import './DeleteTagButton.css';

function DeleteTagButton({ tagId }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteTag(tagId));
    history.push('/');
  };

  return (
    <button onClick={handleSubmit}>
      <i className="fas fa-trash" />
    </button>
  );

};

export default DeleteTagButton;
