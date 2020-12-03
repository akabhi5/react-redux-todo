import "./App.css";
import Todo from "./Todo";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <Header />
      <div className="col-md-6 offset-md-3 mt-5">
        <Todo />
        <hr />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
