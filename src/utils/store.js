import { createStore, combineReducers } from "redux";
import produce from "immer";

export const initialState = {
  users: null,
  posts: null,
  darkMode: true,
};

export const ADD_USER = (user) => ({
  type: "ADD_USER",
  payload: user,
});
export const INIT_USER = () => ({
  type: "init",
});

export const UsersData = (user) => ({
  type: "fetchData",
  payload: { user },
});

export const getPost = (posts) => ({
  type: "post",
  payload: { posts },
});
export const userReducer = (state = null, action) => {
  if (action.type === "fetchData") {
    return produce(state, (draft) => {});
  }
  return state;
};
export const PostReducers = (state = [], action) => {
  produce(state, (draft) => {
    switch (action.type) {
      case "ADD_USER":
        draft.users.add(action.payload);
        return draft.users;
      default:
        return draft.users;
    }
  });
};

export const reducer = combineReducers({
  users: userReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
