import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

function App() {
  console.log("Starting up the app...");
  const onSelectTask = (item: string) => console.log(item);
  const onSelectEvent = (item: string) => console.log(item);
  const onSelectClass = (item: string) => console.log(item);

  let startingTasks = ["clean the dishes", "finish homework", "idk"];
  let startingEvents = [
    "Go to the movies",
    "Go to the gym",
    "Sister's birthday",
  ];
  let startingClasses = [
    "Calcooloos",
    "Waves",
    "C++",
    "Humanities",
    "Chemistry",
  ];

  return (
    <div>
      <Alert >
        This is the text for the new alert now.
      </Alert>
      <ListGroup
        items={startingTasks}
        heading="Your Tasks:"
        onSelectItem={onSelectTask}
      />
      <ListGroup
        items={startingEvents}
        heading="Your Upcoming Events:"
        onSelectItem={onSelectEvent}
      />
      <ListGroup
        items={startingClasses}
        heading="Your School Classes:"
        onSelectItem={onSelectClass}
      />
    </div>
  );
}

export default App;
