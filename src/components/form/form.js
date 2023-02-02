import { useState } from "react";
import Todo from "../todo/todo";
import Line from "../line/line";
import DeleteBtn from "../deleteBtn/deleteBtn";
import FilterTab from "../filterTab/filterTab";

import "./form.css";

const Form = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const handleDeleteTodo = (e, index) => {
    if (e.target.classList[0] === "delete-btn") {
      const reducedTodos = [...todos];
      reducedTodos.splice(index, 1);
      setTodos(reducedTodos);
    }
  };

  const handleCheckedTodo = (e, index) => {
    if (e.target.checked) {
      setTodo({ value: e.target.value, isChecked: true });
      const checkdTodos = [...todos];
      setTodos(checkdTodos);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos((prev) => [...prev, todo]);
          e.target[0].value = "";
        }}
      >
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Add New"
          onChange={(e) => setTodo({ value: e.target.value, isChecked: false })}
        />
      </form>
      {todos?.map((todo, i) => {
        return i === 0 ? (
          <div
            className="todo-container"
            onClick={(e) => {
              handleDeleteTodo(e, i);
              if (e.target.checked) handleCheckedTodo(e, i);
            }}
            key={`todo1-${todo.value}`}
          >
            <Todo value={todo.value} id={i} />
            <DeleteBtn />
          </div>
        ) : (
          <div
            key={`line-${todo.value}`}
            onClick={(e) => handleDeleteTodo(e, i)}
          >
            <Line />
            <div className="todo-container">
              <Todo value={todo.value} id={i} />
              <DeleteBtn />
            </div>
          </div>
        );
      })}
      <FilterTab todos={todos} />
    </div>
  );
};

export default Form;
