import Button from "../../shared/Button";

export default function TaskCard({ id, title, assignee, dueDate, status, onDelete }) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <p><b>Assignee:</b> {assignee}</p>
      <p><b>Due:</b> {dueDate}</p>
      <p>
        <b>Status:</b>{" "}
        <span className={"status-" + status}>
          {status}
        </span>
      </p>
      {onDelete && (
        <Button onClick={() => onDelete(id)} style={{marginTop: '0.5rem'}}>Delete</Button>
      )}
    </article>
  );
}