import TaskCard from "./TaskCard";
import "./TaskColumn.css";

export default function TaskColumn({ status, tasks, onTaskDelete }) {
  const columnTitle =
    status === "todo"
      ? "To Do"
      : status === "inprogress"
        ? "In Progress"
        : "Done";

  return (
    <section className={`task-column task-column-${status}`}>
      <h2>{columnTitle}</h2>
      {tasks.length === 0 ? (
        <p>No tasks in this column.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard {...task} onDelete={onTaskDelete} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
