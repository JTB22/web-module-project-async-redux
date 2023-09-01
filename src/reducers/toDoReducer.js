import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  RESET_MESSAGE,
} from "../actions/toDoActions";

const initialState = {
  toDos: [],
  isHidden: false,
  message: "",
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (state.toDos.find((todo) => todo.key === action.payload.key)) {
        return {
          ...state,
          message: "You already added this activity to your To-Do List!",
        };
      }
      localStorage.setItem(
        "toDos",
        JSON.stringify([...state.toDos, action.payload])
      );
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case REMOVE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.key !== action.payload),
      };
    case RESET_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};
