import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleTaskFormSubmit = (newTask) => {
    // Add the new task to the list
    const updatedTasks = [...filteredTasks, newTask];
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        tasks={TASKS}
        setFilteredTasks={setFilteredTasks}
        categories={CATEGORIES}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
