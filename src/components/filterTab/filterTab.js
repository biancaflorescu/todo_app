import { useState } from "react";
import "./filterTab.css";

const FilterTab = ({ todos }) => {
  const [counter, setCounter] = useState(0);

  console.log(todos);

  todos.map((todo) => {
    if (todo.checked === true) {
      setCounter((prev) => prev + 1);
    }
  });

  return (
    <div className="filter-tab-container">
      <div>
        <p>{todos.length} items left</p>
      </div>
      <div className="filter-tabs">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  );
};

export default FilterTab;
