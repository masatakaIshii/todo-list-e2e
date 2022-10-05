import { BaseSyntheticEvent, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const onNameInputChange = (event: BaseSyntheticEvent) => {
    setTodo(event.target.value);
  };

  const createTodo = () => {
    if (todo.length > 0) setTodos((todos) => [...todos, todo]);
  };

  return (
    <>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
      <br />
      <form>
        <div>
          <label>Name</label>
          <input
            name="name"
            placeholder="todo's name"
            onChange={onNameInputChange}
          />
        </div>

        <button type="button" onClick={createTodo}>
          Create todo
        </button>
      </form>
    </>
  );
}

export default App;
