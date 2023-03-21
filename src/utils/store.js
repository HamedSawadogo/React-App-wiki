import { createStore, combineReducers } from "redux";
import produce from "immer";

export const initialState = {
  users: null,
  posts: null,
  darkMode: true,
};
export const changeTheme = () => ({
  type: "toogleTheme",
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
    return produce(state, (draft) => {
      draft.push(action.payload);
    });
  }
  return state;
};
export const PostReducers = (state = [], action) => {
  if (action.type === "post") {
    return [...state, action.payload];
  }
  return state;
};
export const ThemeReducer = (state = false, action) => {
  if (action.type === "toogleTheme") {
    return !state;
  }
  return state;
};

export const reducer = combineReducers({
  darkMode: ThemeReducer,
  users: userReducer,
  posts: PostReducers,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
