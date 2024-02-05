import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const allTasks = tasks.map((task, index) => (
    <Task key={index} category={task.category} text={task.text} />
  ));
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
    </div>
  );
}

export default TaskList;
