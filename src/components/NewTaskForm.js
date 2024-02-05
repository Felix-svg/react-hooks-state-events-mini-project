import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState({
    text: "",
    category: categories[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new task details to the parent component
    onTaskFormSubmit(taskDetails);
    // Reset the form after submission
    setTaskDetails({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskDetails.category}
          onChange={handleChange}
        >
          {/* Render <option> elements for each category except "All" */}
          {categories
            .filter((category) => category !== "All")
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
