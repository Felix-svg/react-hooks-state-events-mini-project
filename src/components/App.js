import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
    const filteredTasks = category ? TASKS.filter(task => task.category === category) : TASKS;
    setTasks(filteredTasks);
  };

const onDeleteTask = (taskInput) => {
  setTasks((prevTasks) => prevTasks.filter((task) => task !== taskInput));
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={onSelectCategory} />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;