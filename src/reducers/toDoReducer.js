import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actions/toDoActions";

const initialState = {
  toDos: [],
  isHidden: false,
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
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
    default:
      return state;
  }
};
