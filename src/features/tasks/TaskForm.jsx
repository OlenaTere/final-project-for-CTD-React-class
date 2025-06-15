import { useState } from "react";
import Button from "../../shared/Button";

export default function TaskForm({ onAdd, teamMembers }) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("todo");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setError("");
    onAdd({ title, assignee, dueDate, status });
    setTitle("");
    setAssignee("");
    setDueDate("");
    setStatus("todo");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="title">Title*</label>
        <input
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="assignee">Assignee</label>
        <select
          id="assignee"
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
        >
          <option value="">--Select--</option>
          {teamMembers.map(name => (
            <option value={name} key={name}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      <Button type="submit">Add Task</Button>
    </form>
  );
}