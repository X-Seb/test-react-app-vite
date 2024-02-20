import { useState } from "react";
import Task from "./Task";

function ListGroup() {
  let tasks = ["clean the dishes", "finish homework", "idk"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Here are your tasks: </h1>
      {tasks.length === 0 && <p>You have no tasks.</p>}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={task}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
