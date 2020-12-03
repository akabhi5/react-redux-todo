import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../Redux/actions/todoActions";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        addTodo({
          id: shortid.generate(),
          data: todo,
        })
      );
      setTodo("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-row">
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Add ToDo"
          />
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
