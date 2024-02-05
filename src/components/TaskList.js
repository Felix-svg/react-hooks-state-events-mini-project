import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {

  console.log(tasks)
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;