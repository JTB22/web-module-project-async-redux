export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

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
