import { useState } from "react";
import Task from "./Task";

interface PropsListGroup {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items: items, heading, onSelectItem }: PropsListGroup) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>You have no tasks.</p>}
      <ul className="list-group">
        {items.map((task, index) => (
          <li
            style={
              selectedIndex === index ? { color: "red" } : { color: "white" }
            }
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-danger"
                : "list-group-item list-group-item-light"
            }
            key={task}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items[index]);
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
