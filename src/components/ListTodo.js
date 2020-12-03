import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Redux/actions/todoActions";

const ListTodo = () => {
  const [edit, setEdit] = useState(true);

  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <form key={todo.id} className="mt-3">
          <div className="form-row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter new todo"
                disabled={edit}
                value={todo.data}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-block btn-success"
                value={edit ? "Edit" : "Save"}
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-block btn-danger"
                value="Done"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              />
            </div>
          </div>
        </form>
      ))}
    </>
  );
};

export default ListTodo;
