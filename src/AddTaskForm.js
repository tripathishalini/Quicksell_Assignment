// AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm({ onAddTask, onClose }) {
  const [newTask, setNewTask] = useState({
    id: '',
    title: '',
    tag: [],
    userId: '',
    status: 'Todo',
    priority: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="AddTaskForm">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newTask.title} onChange={handleChange} required />
        </label>
        <label>
          User ID:
          <input type="text" name="userId" value={newTask.userId} onChange={handleChange} required />
        </label>
        <label>
          Priority:
          <select name="priority" value={newTask.priority} onChange={handleChange}>
            <option value={0}>No priority</option>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
            <option value={4}>Urgent</option>
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
