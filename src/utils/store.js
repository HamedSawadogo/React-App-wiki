import { createStore, combineReducers } from "redux";
import produce from "immer";

//actions
export const INIT_USERS = "initUsers";
export const ADD_BLOG = "addBlog";
export const DELETE_BLOG = "deleteBlog";
export const UPDATE_BLOG = "updateblog";

export const initUsers = (users) => ({
  type: INIT_USERS,
  payload: users,
});
export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const userReducer = (state = [], action) => {
  if (action.type == INIT_USERS) {
    state = action.payload;
    return state;
  }
  return state;
};

export const postReducer = (state = [], action) => {
  if (action.type == ADD_BLOG) {
    state = action.payload;
    return state;
  }
  return state;
};
export const reducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
