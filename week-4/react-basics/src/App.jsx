import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    id: undefined,
    title: "",
    description: "",
    completed: false;
  });
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  function todoDone (id) {
    const i = todos.findIndex((to) => id === to.id);
    // do things here
  }

  function addTodo(e) {
    // e.preventDefault();
    if (!todo.title.trim() || !todo.description.trim()) return;

    const newTodo = {
      ...todo,
      id: Math.random().toString(),
    };
    // setTodo({ ...todo, id: Math.floor(Math.random() * 1000000).toString() });
    setTodos([...todos, newTodo]);
    console.log(newTodo);

    setTodo({ id: "", title: "", description: "" });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={todo.title}
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          value={todo.description}
        />
        <br />
        <br />
        <button onClick={addTodo}>Add ToDo</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="todoContainer">
            <b>{todo.title}</b> <br />
            <span>{todo.description}</span> <br />
            <button onClick={() => todoDone(todo.id)}>Mark as complete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
