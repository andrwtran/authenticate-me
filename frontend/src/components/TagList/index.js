import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getAllTags } from '../../store/tag';
import './TagList.css';


function TagList() {
  const dispatch = useDispatch();

  const tagsObj = useSelector((state) => state.tag.entries);
  const tags = Object.values(tagsObj);

  const linkStyle = {
    margin: "1rem",
    color: 'white'
  };

  const activeLinkStyle = {
    color: "gray",
  }

  const iconStyle = {
    color: "white"
  }

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);


  return (
    <div className="tagList">
      <ul>
        {tags.map(({ id, tag_name }) => (
          <li key={id}>
            <span style={iconStyle}>
              <i className="fas fa-sticky-note" />
            </span>
            <NavLink
            to={`/tags/${id}`}
            activeStyle={activeLinkStyle}
            style={linkStyle}
            >{tag_name}</NavLink>
          </li>
        ))}
      </ul>
      {/* <Route path='/books/:bookId/notes/:noteId'>
          <EditNoteInput setShowAddNoteForm={setShowAddNoteForm}/>
      </Route> */}
    </div>
  );
};

export default TagList;
