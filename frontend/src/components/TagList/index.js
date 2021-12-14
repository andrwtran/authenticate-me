import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllTags } from '../../store/tag';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import EditTagInput from '../EditTagInput';
import DeleteTagButton from '../DeleteTagButton';
import AddTagInput from "../AddTagInput";
import './TagList.css';


function TagList() {
  const dispatch = useDispatch();
  const location = useLocation();

  const tagsObj = useSelector((state) => state.tag.entries);
  const tags = Object.values(tagsObj);

  const [showAddTagForm, setShowAddTagForm] = useState(false);
  const [showEditTagForm, setShowEditTagForm] = useState(false);
  const [editTagId, setEditTagId] = useState(null);

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
    if (location.pathname.includes('notes')) return
    dispatch(getAllTags());
  }, [dispatch, location]);

  const handleAddTagClick = (e) => {
    e.preventDefault();
    setShowEditTagForm(false);
    setShowAddTagForm(!showAddTagForm);
  };

  return (
    <Switch>
      <Route path={'/books/:bookId/notes/:noteId'}>
      </Route>
      <Route>
        <button onClick={handleAddTagClick}>
          <i className="fas fa-plus-square" /> Add
        </button>
        {showAddTagForm && <AddTagInput />}
        <div className="tagList">
          <ul>
            {tags.map(({ id, tag_name }) => (
              <li key={id}>
                <span style={iconStyle}>
                  <i className="fas fa-tag" />
                </span>
                <NavLink
                  to={`/tags/${id}`}
                  activeStyle={activeLinkStyle}
                  style={linkStyle}
                >{tag_name}</NavLink>
                <button onClick={(e) => {
                  e.preventDefault();
                  setShowAddTagForm(false);
                  setShowEditTagForm(!showEditTagForm);
                  setEditTagId(id);
                }}>
                  <i className="fas fa-edit" />
                </button>
                <DeleteTagButton tagId={id} />
              </li>
            ))}
          </ul>
          {showEditTagForm && <EditTagInput tagId={editTagId} setShowEditTagForm={setShowEditTagForm} setEditTagId={setEditTagId} />}
        </div>
      </Route>
    </Switch>
  );
};

export default TagList;
