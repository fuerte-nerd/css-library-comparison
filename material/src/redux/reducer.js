import {
  TOGGLE_ADD_TODO_DIALOG,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE,
} from "./types";

const getTodos = () => {
  if (localStorage.getItem("dave_todos_app")) {
    return JSON.parse(localStorage.getItem("dave_todos_app"));
  } else {
    return [];
  }
};

const initialState = {
  todos: getTodos(),
  isAddToDoOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.push(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    case TOGGLE_DONE:
      return {
        ...state,
      };
    case TOGGLE_ADD_TODO_DIALOG:
      return {
        ...state,
        isAddToDoOpen: !state.isAddToDoOpen,
      };
    default:
      return state;
  }
};
