import { useCallback } from "react";
import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";
import "./TaskBoard.css";

const STATUSES = ["todo", "inprogress", "done"];

export default function TaskBoard({ tasks, setTasks, teamMembers }) {
  console.log("tasks passed to TaskBoard:", tasks);
  // Controlled Add Task handler (example)
  const handleAddTask = useCallback(
    async (task) => {
      console.log("Adding task:", task);
      try {
        // POST new task to Airtable
        const res = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/${import.meta.env.VITE_AIRTABLE_TABLE}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: {
                title: task.title,
                assignee: task.assignee,
                dueDate: task.dueDate,
                status: task.status,
              },
            }),
          },
        );
        if (!res.ok) throw new Error("Failed to add task to Airtable");
        const data = await res.json();
        // Add the new Airtable record to your local state
        setTasks((prev) => [
          ...prev,
          {
            id: data.id,
            title: data.fields.title,
            assignee: data.fields.assignee,
            dueDate: data.fields.dueDate,
            status: data.fields.status,
          },
        ]);
      } catch (err) {
        alert("Error adding task: " + err.message);
      }
    },
    [setTasks],
  );

  const handleDeleteTask = useCallback(
    (id) => {
      // Also DELETE from Airtable in real code
      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks],
  );

  return (
    <div className="board-page">
      <h1>Team Chart</h1>
      <TaskForm onAdd={handleAddTask} teamMembers={teamMembers} />
      <div className="task-board">
        {STATUSES.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            onTaskDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
