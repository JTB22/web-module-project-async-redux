export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const RESET_MESSAGE = "RESET_MESSAGE";
export const CLEAR_TODOS = "CLEAR_TODOS";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleTodo = () => {
  return {
    type: TOGGLE_TODO,
  };
};

export const removeTodo = (key) => {
  return {
    type: REMOVE_TODO,
    payload: key,
  };
};

export const resetMessage = () => {
  return {
    type: RESET_MESSAGE,
  };
};

export const clearTodos = () => {
  return {
    type: CLEAR_TODOS,
  };
};
