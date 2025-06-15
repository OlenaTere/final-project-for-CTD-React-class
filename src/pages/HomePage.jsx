export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to TeamChart</h1>
      <p>
        TeamChart helps your team organize, assign, and track tasks efficiently.<br />
        Use the <b>Board</b> page to create tasks, assign them to team members, and update their progress.
      </p>
      <ul>
        <li>Create new tasks with clear titles and due dates</li>
        <li>Assign tasks to specific team members</li>
        <li>Track progress by moving tasks between columns</li>
        <li>Filter and view tasks by assignee or due date</li>
      </ul>
      <p>
        To get started, select <b>Board</b> from the navigation menu!
      </p>
    </div>
  );
}