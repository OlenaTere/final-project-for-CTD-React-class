import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to TeamChart</h1>
      <p>
        <b>TeamChart</b> helps your team organize, assign, and track tasks
        efficiently.
      </p>
      <ul>
        <li>
          <b>Create</b> new tasks with clear titles and due dates
        </li>
        <li>
          <b>Assign</b> tasks to specific team members
        </li>
        <li>
          <b>Track</b> progress by moving tasks between columns
        </li>
      </ul>
      <p>
        To get started, select <b>Board</b> from the navigation menu!
      </p>
    </div>
  );
}
