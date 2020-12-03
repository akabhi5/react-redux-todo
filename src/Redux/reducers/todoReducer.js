import { ADD_TODO, REMOVE_TODO } from "../constants/todoConstants";

export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newState = [...state];
      newState.push(action.payload);
      return newState;
    case REMOVE_TODO:
      let updatedState = [...state];
      updatedState = updatedState.filter((todo) => todo.id !== action.payload);
      return updatedState;
    default:
      return state;
  }
};
