import { ADD_TODO, REMOVE_TODO } from "../constants/todoConstants";

export const addTodo = (todo) => async (dispatch) => {
  //   let { todo: todos } = getState();
  //   todos.push(todo);
  //   console.log(todos);
  //    do this in reducer using state var
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });

  let localTodos = JSON.parse(localStorage.getItem("todo")) || [];
  localTodos.push(todo);
  localStorage.setItem("todo", JSON.stringify(localTodos));
};

export const removeTodo = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_TODO,
    payload: id,
  });
  localStorage.setItem("todo", JSON.stringify(getState().todo));
};
