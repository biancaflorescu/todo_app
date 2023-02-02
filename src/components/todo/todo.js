import { useState } from "react";

import "./todo.css";

const Todo = ({ value, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="todo">
      <input
        type="checkbox"
        id={id}
        name={value}
        value={value}
        className="todo"
        onChange={(e) =>
          e.target.checked ? setIsChecked(true) : setIsChecked(false)
        }
      />
      <label
        htmlFor={id}
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "#3b424782" : "#3b4247",
        }}
      >
        {value}
      </label>
    </div>
  );
};

export default Todo;
